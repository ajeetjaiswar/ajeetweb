import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import { searchCompany } from '../../../../../services/searchService';
// import Logo from './Logo';
import { SearchMobile, menu, CrossIcon, SearchHeader } from '../../../../../assets/images';
import Logo from '../header/Logo';
import { Search } from '../../../../components/common';
import ReactHtmlParser from 'react-html-parser';
import RouterConstants from '../../../../../constants/routerConstants';

let searchListOptions = [];

class Header extends PureComponent {
    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
        this.changeSearchInput = this.changeSearchInput.bind(this);
        this.state = {
            notificaionOpen: false,
            profileOpen: false,
            isLandingPage: false,
            SearchQuery: null
        }
    }

    componentDidMount() {
        let pathname = this.props.location.pathname;
        if (pathname === RouterConstants.landing) {
            this.setState({ isLandingPage: true })
        } else {
            this.setState({ isLandingPage: false })
        }
        this.unListen = this.props.history.listen((location, action) => {

            if (location.pathname === RouterConstants.landing) {
                this.setState({ isLandingPage: true })
            } else {
                this.setState({ isLandingPage: false })
            }
        });

        window.addEventListener('scroll', () => {
            let activeClass = true;
            const banner = document.getElementsByClassName('banner');
            const bannerHeight = (banner && banner.length > 0) ? banner[0].clientHeight : 0;
            const conversation = document.getElementsByClassName('conversation');
            const conversationHeight = (conversation && conversation.length > 0) ? conversation[0].clientHeight : 0;
            if (window.scrollY > bannerHeight + conversationHeight + 80) { // for static header.
                activeClass = true;
            } else {
                activeClass = false;
            }
            this.setState({ activeClass });
        });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', () => {
            // remove scroll listener
        });
    }

    isLoggedIn = () => {
        const token = localStorage.getItem('accessToken');
        if (!token) {
            return false
        } else { return true; }
    }

    // logout
    handleLogOut = () => {
        this.setState({ loaderOpen: true })
        localStorage.removeItem('accessToken');
    }

    // notification dropdown
    notificaionDropdownToggle = () => {
        this.setState(prevState => ({
            notificaionOpen: !prevState.notificaionOpen
        }));
    }

    handleSearchClick(e) {
        window.location.href = window.origin + e.target.getAttribute('url');
    }

    // profile dropdown
    profileDropdownToggle = () => {
        this.setState(prevState => ({
            profileOpen: !prevState.profileOpen
        }));
    }

    goToBlogs = () => {
        window.location.href = '/blogs';
    }

    goToHome = () => {
        this.props.toggleMobileMenu();
        if (this.props.location.pathname === RouterConstants.landing) {
            // scroll if user is already on landing page.
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
        } else {
            this.props.history.push(RouterConstants.landing);
        }
    }

    handleSearchButton() {
        let searchval = localStorage.getItem("search-value");
        if (searchval && searchval.length > 1) {
            window.location.href = RouterConstants.companySearch;
        }
    }

    handleSearch() {
        searchCompany(this.state.SearchQuery).then((response) => {
            searchListOptions = (response.data.hits.hits).map(i => {
                if (i._source.type === "COMPANYLOCATION" || i._source.type === "COMPANYINDUSTRY") {
                    return (<li type={i._source.type} url={i._source.url} onClick={this.handleSearchClick}>{ReactHtmlParser(i._source.description)}</li>)
                }
                return (<li type={i._source.type} url={i._source.url} onClick={this.handleSearchClick}>{ReactHtmlParser(i._source.keyword)}</li>)
            })

            if (typeof (Storage !== undefined) && this.state.SearchQuery.length > 0) {
                localStorage.setItem('search-result', JSON.stringify(searchListOptions || []));
                localStorage.setItem('search-value', this.state.SearchQuery)

            }
        });
    }

    changeSearchInput(e) {
        let searchQuery = e.target.value
        this.setState({ SearchQuery: searchQuery })
    }

    showSearchBar = () => {
        const { pathname } = this.props.location;
        let splitPath = pathname.split(RouterConstants.landing);
        splitPath.pop();
        let joinPath = splitPath.join(RouterConstants.landing);
        splitPath.pop();
        let secondPath = splitPath.join(RouterConstants.landing);
        // const searchBarUrls = ['/companies', '/search', '/company/detail', '/company/about', '/companies/industry', '/companies/location']
        const searchBarUrls = [RouterConstants.companies, RouterConstants.companySearch, RouterConstants.aboutCompany, RouterConstants.companyIndustry, RouterConstants.companyLocation]
        if (searchBarUrls.indexOf(pathname) > -1 || searchBarUrls.indexOf(joinPath) > -1 || searchBarUrls.indexOf(secondPath) > -1) {
            return true;
        }
        return false;
    }

    render() {
        const { isLandingPage, activeClass } = this.state;
        const { headerToggle, toggleMobileMenu, toggleSearchBar, searchToggle } = this.props;
        console.log('headerToggle toggleSearchBar searchToggle', headerToggle, toggleSearchBar, searchToggle)
        if (this.state.SearchQuery && this.state.SearchQuery.length >= 2) {
            this.handleSearch();
        }
        return (
            <header className="header">
                <div className={classNames('static-header', { transparent: isLandingPage }, { 'top-bar': activeClass })}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-4">
                                <div className="logo d-flex align-items-center">
                                    {window.innerWidth > 1023 ?
                                        <Link className="pl-sm-0" to={RouterConstants.landing}>
                                            <Logo />
                                        </Link>
                                        :
                                        <div className="d-flex align-items-center w-100">
                                            <Link className="pl-0 mr-auto" to={RouterConstants.landing}>
                                                {/* <img src={MobileLogo} /> */}
                                                <Logo />
                                            </Link>
                                            <div className="header-search d-flex align-items-center justify-content-end">
                                                {this.showSearchBar() ?
                                                    <img className={classNames('search-icon', { 'd-none': headerToggle })} src={SearchMobile} alt="search" onClick={toggleSearchBar} />
                                                    :
                                                    null
                                                }
                                                <div className={classNames("responsive-search", { 'd-block': searchToggle })} >
                                                    <div className="search-header-responsive d-flex justify-content-between align-items-center">
                                                        <Link className="pl-0 mr-auto" to={RouterConstants.landing}>
                                                            {/* <img src={MobileLogo} /> */}
                                                            <Logo />
                                                        </Link>
                                                        <div className={classNames("cross-icon")} onClick={toggleSearchBar}>
                                                            <img src={CrossIcon} className="icons" alt="home" />
                                                        </div>
                                                    </div>
                                                    <ul className="list-unstyled">
                                                        <li>
                                                            <div className="input-group">
                                                                <input type="text" onChange={this.changeSearchInput} placeholder="Search for companies, location, industries" className="form-control" />
                                                                <div className="input-group-append">
                                                                    <span className="input-group-text">
                                                                        <img src={SearchHeader} onClick={this.handleSearchButton} alt="search-bar" />
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="search-suggestion">
                                                                <h4>Suggestions</h4>
                                                                <ul className="list-unstyled">
                                                                    {searchListOptions}
                                                                </ul>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/* {window.innerWidth < 576 ? */}
                                                <div className={classNames("hum-burger", { 'd-none': headerToggle })} onClick={toggleMobileMenu}>
                                                    <img src={menu} className="icons" alt="home" />
                                                </div>
                                                {/* :null
                                            } */}
                                            <div className={classNames("cross-icon",  { 'd-none': !headerToggle })} onClick={toggleMobileMenu}>
                                                <img src={CrossIcon} className="icons" alt="home" />
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>

                            <div className="col-lg-8 ml-auto">
                                <ul className={classNames('list-unstyled', 'ml-auto', 'm-0', 'header-actions-icons', 'd-lg-flex', 'align-items-center', 'justify-content-center', 'justify-content-sm-end', 'flex-column', 'flex-sm-row', 'd-lg-none', { 'd-block': headerToggle })}>

                                    {
                                        this.showSearchBar() ?
                                        window.innerWidth > 1023 ?
                                            <li className="mr-auto">
                                               
                                                    <div className="header-search d-flex align-items-center justify-content-center ">
                                                        <Search
                                                            searchClass="search-wrapper"
                                                            inputClass="search-box"
                                                            inputType="text"
                                                            inputName="search"
                                                            inputPlaceholder="Search"
                                                        />
                                                    </div>
                                                    
                                                
                                            </li>: null : null
                                    }
                                    <li className="pr-sm-0">
                                        <div className="icon-kool">
                                            <NavLink to={RouterConstants.companies} onClick={toggleMobileMenu}><span>Companies</span></NavLink>
                                        </div>
                                    </li>
                                    <li className="pr-sm-0">
                                        <div className="icon-kool">
                                            <a className="cursor-pointer" onClick={this.goToBlogs}><span>Blogs</span></a>
                                            {/* <NavLink to="/blogs" onClick={this.goToBlogs} ><span>Blog</span></NavLink> */}
                                        </div>
                                    </li>
                                    {
                                        isLandingPage && !activeClass
                                            ?
                                            <li className="pr-sm-0">
                                                <div className="icon-kool">
                                                    <NavLink to={RouterConstants.aboutUs} onClick={toggleMobileMenu} className="prsm-0"><span>About Us</span></NavLink>
                                                </div>
                                            </li>
                                            :
                                            <li className="pr-sm-0">
                                                <div className="btn-wrapper">
                                                    <button className="btn btn-primary-fill" onClick={this.goToHome}>JOIN NOW</button>
                                                </div>
                                            </li>
                                    }

                                    {isLandingPage && !activeClass && window.innerWidth < 576 ?
                                        <li className="pr-sm-0">
                                            <div className="btn-wrapper">
                                                <button className="btn btn-primary-fill" onClick={this.goToHome}>JOIN NOW</button>
                                            </div>
                                        </li> : null
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
