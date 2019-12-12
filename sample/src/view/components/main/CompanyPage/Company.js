import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import classNames from 'classnames';
import { connect } from "react-redux";
import { fetchCompanyList } from "../../../../actions/CompanyAction";
import { DropdownMenu, Dropdown, DropdownToggle } from 'reactstrap';
import { Filter, PageHeading } from '../../common';
import CompanyCard from './CompanyCard';
import { Loader } from './../../../../assets/SvgIcon';
import { CrossIcon, DropArrowBlack } from '../../../../assets/images';

import ReactPaginate from 'react-paginate';
import Footer from '../../../layout/defaultLayout/footer/Footer';
const pageSize = 21;
class Company extends Component {
    constructor(props) {
        super(props);
        this.handlefilterChange = this.handlefilterChange.bind(this);
        this.clearFilters = this.clearFilters.bind(this);
        this.state = {
            sortDropdownAction: false,
            sortValue: 'Kool Kanya Score',
            filter: false,
            sortMobile: false
        }

    }

    filterToggle = () => {
        this.setState({ filter: !this.state.filter })
    }

    componentDidMount() {
        this.props.dispatch(fetchCompanyList(null, null, pageSize));
    }

    handlePageClick = data => {
        let selected = data.selected;
        this.props.dispatch(fetchCompanyList(this.props.company.items.companyList.filter, (selected) * pageSize, pageSize));
        if (!('scrollBehavior' in document.documentElement.style)) {
            //safari does not support smooth scroll
            (async () => {
                const { default: smoothScroll } = await import(
                    /* webpackChunkName: 'polyfill-modern' */
                    'smoothscroll-polyfill'
                )
                smoothScroll.polyfill()
                window.scroll({ top: 0, left: 0, behavior: 'smooth' })
            })()
        } else {
            window.scroll({ top: 0, left: 0, behavior: 'smooth' })

        }
    };

    handleCity() {
        let name = (this.props.match.params.locationname).replace("-", " ");
        let id = this.props.match.params.locationid;
        const filters = this.props.company.items.companyList.filter;
        let isfilterthere = filters['location'].filter(function (el) {
            return el._id == id // eslint-disable-line
        });
        if (isfilterthere.length == 1) { // eslint-disable-line
            (filters['location']).map((f) => {
                if (f._id == id) { // eslint-disable-line
                    f.isChecked = true;
                }
                return f;
            });
        }
        else {
            let locf = {};
            locf.isChecked = true;
            locf._id = id;
            locf.name = name;
            (filters['location']).unshift(locf)
        }
        this.props.match.params = {};
        this.props.dispatch(fetchCompanyList(filters, null, pageSize));
    }

    handleIndustry() {
        let name = this.props.match.params.industryname;
        let id = this.props.match.params.industryid;
        const filters = this.props.company.items.companyList.filter;
        let isfilterthere = filters['industry'].filter(function (el) {
            return el._id == id // eslint-disable-line
        });
        if (isfilterthere.length == 1) { // eslint-disable-line
            (filters['industry']).map((f) => {
                if (f._id == id) { // eslint-disable-line
                    f.isChecked = true;
                }
                return f;
            });
        }
        else {
            let locf = {};
            locf.isChecked = true;
            locf._id = id;
            locf.name = name;
            (filters['industry']).unshift(locf)
        }
        this.props.match.params = {};
        this.props.dispatch(fetchCompanyList(filters, null, pageSize));
    }
    // sort toggle mobile
    sortToggleMobile = () => {
        this.setState({ sortMobile: !this.state.sortMobile })
    }


    //sorting toggle
    sortDropdownToggle = () => {
        this.setState(prevState => ({
            sortDropdownAction: !prevState.sortDropdownAction,

        }));
    }
    // sorting
    sortSelect = (key) => {
        this.sortDropdownToggle();
        this.setState({
            sortValue: key
        })
        if (key == 'Kool Kanya Score') { // eslint-disable-line
            const filters = this.props.company.items.companyList.filter;
            filters['personas'].map((f) => {
                f.isChecked = false;
                return f;
            });
            this.setState({ filters })
            this.props.dispatch(fetchCompanyList(filters, null, pageSize));
        }
        else {
            let currentState = {
                "name": key,
                "isChecked": true,
                "category": 'personas'
            };
            this.handlefilterChange(currentState);
        }
    }

    handlefilterChange(filter) {
        const filters = this.props.company.items.companyList.filter;
        filters[filter.category].map((f) => {
            if (f.name === filter.name) {
                f.isChecked = filter.isChecked;
            }
            return f;
        });
        this.setState({ filters });
        this.props.dispatch(fetchCompanyList(filters, null, pageSize));
    }
    clearFilters() {
        this.props.dispatch(fetchCompanyList(null, null, pageSize));
    }
    render() {
        const { filter, sortMobile } = this.state
        if (!this.props.company.items.companyList || !this.props.company.items.companyList.filter) {
            return <Loader />;
        }
        if (this.props.match.params.industryname) {
            this.handleIndustry();
            return <Loader />;
        }
        else if (this.props.match.params.locationname) {
            this.handleCity();
            return <Loader />;
        }
        let companyObj = this.props.company;
        let companyList = companyObj ? companyObj.items.companyList ? companyObj.items.companyList.companylist.length > 0
            ? companyObj.items.companyList.companylist.map(element => {
                return (
                    <div className="col-lg-4 col-md-6">
                        <CompanyCard Company={element} />
                    </div>
                )
            }) : null : null : null;
        let sortList = []
        let kkScoreElement = <li className="flat-item"
            onClick={() => { this.sortSelect('Kool Kanya Score'); this.sortToggleMobile() }}>Kool Kanya Score
        </li>
        sortList.push(kkScoreElement);
        let personaSort = companyObj ? companyObj.items.companyList ? companyObj.items.companyList.filter ? companyObj.items.companyList.filter.personas.map(element => {
            return (
                <li className="flat-item"
                    onClick={() => { this.sortSelect(element.name); this.sortToggleMobile() }}>{element.name}
                </li>
            )
        }) : [] : [] : [];
        sortList = sortList.concat(personaSort)
        return (
            <div className="bg-light-wrapper">
                <Helmet>
                    <title>Kool Kanya | Top Companies for you</title>
                    <meta name="description" content="Our mission is to support women to find & build careers of their choice. We suggest the best companies and jobs based on user’s interest with Kool Kanya scores & analysis." />
                </Helmet>
                <div className="container">
                    <div className="company-wrapper">
                        {companyObj.loading ? <Loader /> : null}
                        <div className="row">
                            <div className={classNames('col-lg-3', 'filter-mobile', { 'd-block': filter })}>
                                {companyObj && companyObj.items.companyList && companyObj.items.companyList.filter &&
                                    <Filter
                                        filterToggle={this.filterToggle}
                                        onFilterChange={this.handlefilterChange}
                                        onResetClick={this.clearFilters}
                                        filterClass="filter-wrapper"
                                        headerText="Filter by:"
                                        resetText="Reset"
                                        categoryHeadText={companyObj.items.companyList.filter}
                                    />}
                                <div className="mobile-filter-btn-wrap">
                                    <ul>
                                        <li onClick={this.clearFilters}>Reset</li>
                                        <li onClick={this.filterToggle}>
                                            <span className="btn btn-primary-fill">Done</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="company-content">
                                    {/* page heading */}
                                    <PageHeading
                                        tagName="h1"
                                        className="page-heading"
                                        headingClass="heading"
                                        headingText="Top Companies Fitting Your Requirements"
                                    />
                                    {/* sort component */}
                                    <div className="sort-wrapper d-none d-lg-block">
                                        <div className='d-flex align-items-center justify-content-end'>
                                            <div className="sort-bg">
                                                <div className="d-flex align-items-center"><span>Sort by :</span>
                                                    <Dropdown className="actions" isOpen={this.state.sortDropdownAction}
                                                        toggle={this.sortDropdownToggle}>
                                                        <DropdownToggle className="d-flex align-items-center justify-content-between">
                                                            <span>{this.state.sortValue}</span>
                                                            <span className={classNames('drop-arrow', { 'rotate': this.state.sortDropdownAction })}>
                                                                <img src={DropArrowBlack} alt="drop-arrow" />
                                                            </span>
                                                        </DropdownToggle>
                                                        <DropdownMenu className="flat-dropdown-wrapper">
                                                            <ul className='list-unstyled flat-list'>
                                                                {sortList}
                                                            </ul>
                                                        </DropdownMenu>
                                                    </Dropdown>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="company-list-wrapper">
                                        <div className="row">
                                            {companyList && companyList.length > 0 && companyList}
                                            {!companyList && <h3>
                                                No companies found matching your search
                                        </h3>}
                                        </div>
                                    </div>

                                    {companyList && companyList.length > 0 &&

                                        <div className="custom-pagination">
                                            <ReactPaginate
                                                breakClassName={'break-me'}
                                                pageCount={Math.ceil(this.props.company.items.companyList.total / pageSize)}
                                                marginPagesDisplayed={2}
                                                pageRangeDisplayed={5}
                                                onPageChange={this.handlePageClick}
                                                containerClassName={'pagination'}
                                                subContainerClassName={'pages pagination'}
                                                activeClassName={'active'}
                                            />
                                        </div>}

                                </div>
                            </div>
                        </div>
                        <div className="mobile-filter-wrapper">
                            <ul>
                                <li onClick={this.sortToggleMobile}>Sort by</li>
                                <li onClick={this.filterToggle}>Filter by</li>
                            </ul>
                        </div>
                        {window.innerWidth < 1024 ?
                            <div className={classNames('sort-dropdown-mobile-wrapper', { 'd-block d-md-block': sortMobile })}>
                                <div className="inner-wrapper">
                                    <div className="d-flex justify-content-between align-items-center sort-mobile-header">
                                        <h4>Sort by</h4>
                                        <div className={classNames("cross-icon")} onClick={this.sortToggleMobile}>
                                            <img src={CrossIcon} className="icons" alt="home" />
                                        </div>
                                    </div>

                                    <ul className='list-unstyled mobile-sort'>
                                        {sortList}
                                    </ul>

                                </div>
                            </div> : null
                        }
                    </div>

                </div>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    company: state.companyReducer
});
export default connect(mapStateToProps)(Company);
