import React, { Component } from 'react';
import AuthHeaderComponent from './authHeader/authHeader';
import MainHeaderComponent from './header/Header';
import StaticHeaderComponent from './staticHeader/staticHeader';

const authHeader = ['/login']
const mainHeader = ['/home']
const staticHeader = ['/','/search','/pagenotfound', '/about', '/team', '/companies', '/company/detail', '/faq','/terms','/privacy-policies','/company/about', '/companies/industry', '/companies/location']


class HeaderWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMainHeader: false,
            showAuthHeader: false,
            showStaticHeader: false,
            headerToggle: false,
            searchToggle: false
        }
    }

    componentDidMount() {
        // check for the first also
        // console.log('path here --------------> > ',this.props)
        let pathname = this.props.location.pathname;
        this.checkAuthHeader(pathname);
        this.checkMainHeader(pathname);
        this.checkStaticHeader(pathname);

        this.unListen = this.props.history.listen((location, action) => {
            // check notification on each route change
            let pathname = location.pathname;
            this.checkAuthHeader(pathname);
            this.checkMainHeader(pathname);
            this.checkStaticHeader(pathname);
        });
    }

    toggleMobileMenu = () => {
        this.setState({ headerToggle: !this.state.headerToggle })
    }

    toggleSearchBar = () => {
        this.setState({ searchToggle: !this.state.searchToggle })
    }

    checkMainHeader(pathname) {
        // Change this logic in future.
        let splitPath = pathname.split('/');
        splitPath.pop();
        let joinPath = splitPath.join('/');
        splitPath.pop();
        let secondPath = splitPath.join('/');
        if (mainHeader.indexOf(pathname) > -1 || mainHeader.indexOf(joinPath) > -1 || mainHeader.indexOf(secondPath) > -1) {
            this.setState({ showMainHeader: true })
        } else {
            this.setState({ showMainHeader: false })
        }
    }

    checkAuthHeader(pathname) {
        if (authHeader.indexOf(pathname) > -1) {
            this.setState({ showAuthHeader: true })
        } else {
            this.setState({ showAuthHeader: false })
        }
    }

    checkStaticHeader(pathname) {
        // Change this logic in future.
        let splitPath = pathname.split('/');
        splitPath.pop();
        let joinPath = splitPath.join('/');
        splitPath.pop();
        let secondPath = splitPath.join('/');
        if (staticHeader.indexOf(pathname) > -1 || staticHeader.indexOf(joinPath) > -1 || staticHeader.indexOf(secondPath) > -1) {
            this.setState({ showStaticHeader: true })
        } else if (staticHeader.indexOf(joinPath) > -1) {
            this.setState({ showStaticHeader: true })
        } else {
            this.setState({ showStaticHeader: false })
        }
    }


    componentWillUnmount() {
        this.unListen();
    }



    render() {
        let { showStaticHeader, showMainHeader, showAuthHeader, headerToggle, searchToggle, resetMobileMenu } = this.state;
        return (
            <div>
                {showAuthHeader
                    ?
                    <AuthHeaderComponent
                        headerToggle={headerToggle}
                        toggleMobileMenu={this.toggleMobileMenu}
                        toggleSearchBar={this.toggleSearchBar}
                        searchToggle={searchToggle}
                    />
                    : null
                }
                {showMainHeader
                    ?
                    <MainHeaderComponent
                        headerToggle={headerToggle}
                        toggleMobileMenu={this.toggleMobileMenu}
                        toggleSearchBar={this.toggleSearchBar}
                        searchToggle={searchToggle}
                    />
                    : null
                }
                {showStaticHeader || true
                    ?
                    <StaticHeaderComponent
                        headerToggle={headerToggle}
                        toggleMobileMenu={this.toggleMobileMenu}
                        {...this.props}
                        toggleSearchBar={this.toggleSearchBar}
                        searchToggle={searchToggle}
                    />
                    : null
                }
            </div>
        );
    }
}

export default HeaderWrapper;
