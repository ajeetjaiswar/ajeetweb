import React, { Component } from 'react';
import classNames from 'classnames';
import { LeftSidebar, ContentWrapper, RightSidebar } from '../defaultLayout';
import HeaderWrapper from '../../layout/defaultLayout/headerWrapper/headerWrapper';


const SidebarRoutes = ['/home']

class Portal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openSideBar: false,
            showSidebar: false,
        }
    }


    componentDidMount() {
        // check for the first also
        let pathname = this.props.location.pathname;
        if (SidebarRoutes.indexOf(pathname) > -1) {
            this.setState({ showSidebar: true })
        } else {
            this.setState({ showSidebar: false })
        }

        this.unListen = this.props.history.listen((location, action) => {
            // check notification on each route change
            let pathname = location.pathname;
            if (SidebarRoutes.indexOf(pathname) > -1) {
                this.setState({ showSidebar: true })
            } else {
                this.setState({ showSidebar: false })
            }
        });
    }

    componentWillUnmount() {
        this.unListen();
    }


    // toggle menu for mobile
    toggleMobileMenu = () => {
        this.setState({ openSideBar: !this.state.openSideBar })
        // this.setState(prevState => ({
        //     openSidebar: !prevState.openSidebar
        // }));
    }

    isLoggedIn = () => {
        const token = localStorage.getItem('accessToken');
        if (!token) {
            return false
        } else {
            return true;
        }
    }

    handleLogOut = () => {
        this.setState({ loaderOpen: true })
        localStorage.removeItem('accessToken');

        // let token = localStorage.getItem('accessToken')
        // logoutUser(token)
        //     .then(res => {
        //         localStorage.removeItem('accessToken');
        //         localStorage.removeItem('planId');
        //         self.setState({redirect: true, loaderOpen: false})
        //     })
    }

    isSideBarNeeded() {

    }

    render() {
        let { showSidebar } = this.state;
        // if (!this.isLoggedIn()) {
        //     return <Redirect push to="/" />
        // }
        return (
            <div className="main-container">
                <HeaderWrapper
                    {...this.props}
                // toggleMobileMenu={this.toggleMobileMenu}
                />
                <main className="main-wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            {
                                showSidebar ?
                                    <div
                                        className={classNames('col-md-3', { 'd-none': this.props.location.pathname === '/company/detail' || this.props.location.pathname === '/company' })}>
                                        <LeftSidebar
                                            toggleMobileMenu={this.toggleMobileMenu}
                                            leftSidebarClassName={classNames("left-sidebar sticky-top", { zIndex: this.state.openSideBar })}
                                            leftMenuClassName={classNames("left-menu", { show: this.state.openSideBar })}
                                        />
                                    </div>
                                    : null
                            }

                            <div className={classNames({ 'col-md-6': showSidebar }, { 'col-md-12 px-0': !showSidebar })}>
                                <ContentWrapper
                                    changeView={this.changeView}
                                />
                            </div>
                            {
                                showSidebar ?
                                    <div
                                        className={classNames('col-md-3', { 'd-none': this.props.location.pathname === '/company/detail' || this.props.location.pathname === '/company' })}>
                                        <RightSidebar />
                                    </div>
                                    : null
                            }
                        </div>
                    </div>
                </main>
                {/* <Footer /> */}
            </div>
        );
    }
}

export default Portal;
