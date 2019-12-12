import React, { Component } from 'react';
import classNames from 'classnames';
import CompanyCard from './CompanyCard';
import { Filter } from '../../common';
import { Loader } from './../../../../assets/SvgIcon';
import { connect } from 'react-redux';
import { fetchSearchedCompanyLists } from "../../../../actions/SearchActions";
import { fetchCompanyList } from "../../../../actions/CompanyAction";
import Footer from '../../../layout/defaultLayout/footer/Footer';
import { PageHeading } from '../../common';

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: null,
            checkFilter: false,
            filter: false,
        }
        this.handlefilterChange = this.handlefilterChange.bind(this);
        this.clearFilters = this.clearFilters.bind(this);
    }
    componentDidMount() {
        let searches = localStorage.getItem("search-result");
        if (searches) {
            searches = JSON.parse(searches);
            let companyIds = []
            if (searches.length > 0) {
                searches.map(e => {
                    if (e.type === "COMPANY" || (e.props && e.props.type === "COMPANY")) {
                        let somearr = e.url ? e.url.split("/") : e.props.url.split("/");
                        companyIds.push(somearr[somearr.length - 1])
                    }
                })
            }
            if (companyIds.length >= 0) {
                this.props.dispatch(fetchSearchedCompanyLists(companyIds));
                this.props.dispatch(fetchCompanyList(null, null, 4));
            }
            else {
                this.props.dispatch(fetchCompanyList(null, null, 4));
            }
        }
        else {
            this.props.dispatch(fetchCompanyList(null, null, 4));
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
        this.setState({ filters: filters, checkFilter: true });
    }
    filterToggle = () => {
        this.setState({ filter: !this.state.filter })
    }
    clearFilters() {
        const filters = this.props.company.items.companyList.filter;
        filters['industry'].map((f) => {
            f.isChecked = false;
            return f;
        });
        filters['location'].map((f) => {
            f.isChecked = false;
            return f;
        });
        this.setState({ filters: filters, checkFilter: false });
    }
    render() {
        const { filter } = this.state
        if (!this.props.company.items.companyList || !this.props.search.items.companySearchlist) {
            return <Loader />;
        }
        let searchVal = localStorage.getItem("search-value");
        let searchObj = this.props.search;
        let companyObj = this.props.company;

        let searchedList = searchObj.items.companySearchlist.companylist;
        if (this.state.checkFilter) {
            let industryfilter = companyObj.items.companyList.filter.industry.filter(element =>
                element.isChecked == true).map(element => {
                    return element.name
                });
            if (industryfilter.length > 0) {
                searchedList = searchedList.filter(e =>
                    industryfilter.includes(e.industry));
            }
            let locationfilter = companyObj.items.companyList.filter.location.filter(element =>
                element.isChecked == true).map(element => {
                    return element.name
                });;
            if (locationfilter.length > 0) {
                searchedList = searchedList.filter(e =>
                    e.otherlocations.some(x => locationfilter.includes(x)));
            }
        }

        let companySearchList = searchedList.map(element => {
            return (
                <div className="col-lg-4 col-md-6">
                    <CompanyCard Company={element} />
                </div>
            )
        });
        let companyList = (companyObj.items.companyList && companyObj.items.companyList.companylist && companyObj.items.companyList.companylist.length > 0)
            ? companyObj.items.companyList.companylist.slice(0, 4).map(element => {
                return (
                    <div className="col-lg-3 col-md-6">
                        <CompanyCard Company={element} />
                    </div>
                )
            }) : [];
        let searchCount = searchedList.length;
        return (
            <div className="bg-light-wrapper">
                <div className="container">
                    <div className="company-wrapper">
                        {searchObj.items.companySearchlist.companylist.length > 0 && companyObj && companyObj.items.companyList && companyObj.items.companyList.filter &&

                            <div className="row">
                                <div className={classNames('col-md-3', 'filter-mobile', { 'd-block': filter })}>
                                    <Filter
                                        filterToggle={this.filterToggle}
                                        onFilterChange={this.handlefilterChange}
                                        onResetClick={this.clearFilters}
                                        filterClass="filter-wrapper"
                                        headerText="Filter by:"
                                        resetText="Reset"
                                        categoryHeadText={companyObj.items.companyList.filter}
                                    />
                                    <div className="mobile-filter-btn-wrap">
                                        <ul>
                                            <li onClick={this.clearFilters}>Reset</li>
                                            <li onClick={this.filterToggle}>
                                                <span className="btn btn-primary-fill">Done</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <div className="company-content">
                                        <h5 className="search-result-heading">
                                            Showing {searchCount} Results for <span className="font-weight-bold">'{searchVal}'</span>
                                        </h5>
                                        <div className="sort-wrapper d-none d-sm-block">
                                            <div className='d-flex align-items-center justify-content-end'>
                                                <div className="sort-bg">
                                                    <div className="d-flex align-items-center">

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="company-list-wrapper">
                                            <div className="row">
                                                {companySearchList}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>}
                        {searchObj.items.companySearchlist && companyList.length > 0 && (searchObj.items.companySearchlist.companylist.length <= 0) && <div className="row">
                            <div className="col-md-12">
                                <div className="company-content">
                                    <h5 className="no-company-found">
                                        Sorry! We couldn't find anything related to "{searchVal}"
                                    </h5>
                                    <div className="sort-wrapper d-none d-sm-block">
                                        <div className='d-flex align-items-center justify-content-end'>
                                        </div>
                                    </div>
                                    <PageHeading
                                        tagName="h5"
                                        className="page-heading-search"
                                        headingClass="heading"
                                        headingText="See Other Top Companies"
                                    />
                                    <div className="company-list-wrapper">
                                        <div className="row">
                                            {companyList}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>}
                        <div className="mobile-filter-wrapper">
                            <ul>
                                <li onClick={this.filterToggle}>Filter by</li>
                            </ul>
                        </div>
                    </div>

                </div>
                <Footer />
            </div>

        );
    }
}

const mapStateToProps = state => ({
    search: state.searchReducer,
    company: state.companyReducer
});
export default connect(mapStateToProps)(SearchResults);