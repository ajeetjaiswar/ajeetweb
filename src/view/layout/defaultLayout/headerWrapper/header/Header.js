import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import classNames from 'classnames';
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom';
import { Badge, Profile, NotificationDropdown, ProfileDropdown } from '../../../../components/common';
import Logo from './Logo';
import { Home, Message, Notification, ProfileImage, SearchMobile, menu, MobileLogo, CrossIcon } from '../../../../../assets/images';
import RouterConstants from '../../../../../constants/routerConstants';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notificaionOpen: false,
            profileOpen: false,
        }
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
        // let token = localStorage.getItem('accessToken')
        // logoutUser(token)
        //     .then(res => {
        //         localStorage.removeItem('accessToken');
        //         localStorage.removeItem('planId');
        //         self.setState({redirect: true, loaderOpen: false})
        //     })
    }

    // notification dropdown
    notificaionDropdownToggle = () => {
        this.setState(prevState => ({
            notificaionOpen: !prevState.notificaionOpen
        }));
    }

    // profile dropdown
    profileDropdownToggle = () => {
        this.setState(prevState => ({
            profileOpen: !prevState.profileOpen
        }));
    }


    render() {
        const { headerToggle, toggleMobileMenu,
            location: {
                pathname
            } } = this.props;
        // if (!this.isLoggedIn()) {
        //     return <Redirect push to="/home" />
        // }
        return (
            <header className="header">
                <div className="main-header">
                    <div className="container">
                        <div className="row align-items-center">
                            {
                                window.innerWidth > 576 ?
                                    <Link className="pl-sm-0" to={RouterConstants.landing}>
                                        <Logo />
                                    </Link>
                                    :

                                    <div className="d-flex align-items-center w-100">
                                        <Link className="pl-0 mr-auto" to={RouterConstants.landing}>
                                            {/* <img src={MobileLogo} /> */}
                                            <Logo />
                                        </Link>

                                        <div className={classNames("hum-burger", { 'd-none': headerToggle })} onClick={toggleMobileMenu}>
                                            <img src={menu} className="icons" alt="home" />
                                        </div>

                                        <div className={classNames("cross-icon", { 'd-none': !headerToggle })} onClick={toggleMobileMenu}>
                                            <img src={CrossIcon} className="icons" alt="home" />
                                        </div>
                                    </div>
                            }
                            {
                                pathname == '/companies' ?
                                    <div className="col-md-3 ml-auto">
                                        <ul className="list-unstyled ml-auto m-0 header-actions-icons d-flex align-items-center justify-content-end">
                                            <li className="pr-0">
                                                <div className="header-btn-wrapper">
                                                    <button className="btn btn-primary-fill">JOIN NOW</button>
                                                </div>
                                            </li>
                                        </ul>
                                    </div> :
                                    <div className="col-md-3 ml-auto">
                                        <ul className="list-unstyled m-0 header-actions-icons d-flex align-items-center justify-content-end justify-content-sm-between">
                                            {
                                                window.innerWidth < 577 ?
                                                    <>
                                                        <li className="pl-0" onClick={this.props.toggleMobileMenu}>
                                                            <div className="icon-kool">
                                                                <img src={menu} className="icons" alt="home" />
                                                            </div>
                                                        </li>

                                                        <li className="pl-0 mr-auto">
                                                            <div className="icon-kool">
                                                                <img src={MobileLogo} className="icons" alt="home" />
                                                            </div>
                                                        </li>
                                                    </>
                                                    : null
                                            }

                                            {
                                                window.innerWidth > 576 ?
                                                    <li>
                                                        <div className="icon-kool">
                                                            <img src={Home} className="icons" alt="home" />
                                                        </div>
                                                    </li>
                                                    : null
                                            }
                                            <li>
                                                <div className="icon-kool">
                                                    <img src={Message} className="icons" alt="home" />
                                                    <Badge
                                                        bageClass="kool-badge d-flex align-items-center justify-content-center position-absolute"
                                                        badgeText="15"
                                                    />
                                                </div>

                                            </li>
                                            <li>
                                                <Dropdown className="icon-kool" isOpen={this.state.notificaionOpen} toggle={this.notificaionDropdownToggle}>
                                                    <DropdownToggle>
                                                        <img src={Notification} className="icons" alt="home" />
                                                        <Badge
                                                            bageClass="kool-badge d-flex align-items-center justify-content-center position-absolute"
                                                            badgeText="20"
                                                        />
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <NotificationDropdown />
                                                    </DropdownMenu>
                                                </Dropdown>
                                            </li>
                                            {
                                                window.innerWidth > 576 ?
                                                    <li>
                                                        <Dropdown className="icon-kool" isOpen={this.state.profileOpen} toggle={this.profileDropdownToggle}>
                                                            <DropdownToggle>
                                                                <div className="profile-wrapper">
                                                                    <Profile srcImage={ProfileImage} alt={'profile image'} />
                                                                </div>
                                                            </DropdownToggle>
                                                            <DropdownMenu>
                                                                <ProfileDropdown
                                                                    handleLogOut={this.handleLogOut}
                                                                />
                                                            </DropdownMenu>
                                                        </Dropdown>
                                                    </li>
                                                    : null
                                            }
                                            {
                                                window.innerWidth < 577 ?
                                                    <li className="pr-0">
                                                        <div className="icon-kool">
                                                            <img src={SearchMobile} className="icons" alt="home" />
                                                        </div>
                                                    </li>
                                                    : null
                                            }
                                        </ul>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header = withRouter(Header);
