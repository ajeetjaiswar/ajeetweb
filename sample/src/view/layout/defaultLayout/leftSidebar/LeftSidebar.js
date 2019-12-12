import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Badge, Profile } from '../../../components/common';
import PopularTags from './popularTags/PopularTags';
import { MobileLogo, CrossIcon, ProfileImage } from '../../../../assets/images';
import RouterConstants from '../../../../constants/routerConstants';

class LeftSidebar extends Component {

    render() {
        return (
            <div className={this.props.leftSidebarClassName} >
                <div className={this.props.leftMenuClassName}>
                    <div className="mobile-header d-sm-none">
                        <ul className="list-unstyled d-flex align-items-center">
                            <li className="pl-0">
                                <div className="cross-icon" onClick={this.props.toggleMobileMenu}>
                                    <img src={CrossIcon} className="icons" alt="home" />
                                </div>
                            </li>
                            <li className="pl-0  mr-auto">
                                <div className="icon-kool">
                                    <img src={MobileLogo} className="icons" alt="home" />
                                </div>
                            </li>
                            <li className="pl-0">
                                <div className="icon-kool">
                                    <div className="profile-wrapper">
                                        <Profile srcImage={ProfileImage} alt={'profile image'} />
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <ul className="list-unstyled m-0">
                        <li>
                            <NavLink exact={true} to={RouterConstants.landing}className="">
                                <div className="nav-item">
                                    <span className="kool-home-filled icon"></span>
                                    <span className="nav-text">Discover</span>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={RouterConstants.askAndAnswer} className="">
                                <div className="nav-item">
                                    <span className="kool-qa icon"></span>
                                    <span className="nav-text">Ask & Answer</span>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/home1" className="">
                                <div className="nav-item">
                                    <span className="kool-ttkk icon"></span>
                                    <span className="nav-text">Talk to Kool Kanya</span>
                                    <Badge
                                        bageClass="kool-badge d-flex align-items-center justify-content-center ml-auto mr-2"
                                        badgeText="20"
                                    />
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/home2" className="">
                                <div className="nav-item">
                                    <span className="kool-company icon"></span>
                                    <span className="nav-text">Company Score</span>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={RouterConstants.companies} className="">
                                <div className="nav-item">
                                    <span className="kool-company icon"></span>
                                    <span className="nav-text">Company</span>
                                </div>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/home3" className="">
                                <div className="nav-item">
                                    <span className="kool-ttkk icon"></span>
                                    <span className="nav-text">Bookmarks</span>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/home4" className="">
                                <div className="nav-item">
                                    <span className="kool-bookmark icon"></span>
                                    <span className="nav-text">Bookmarks</span>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={RouterConstants.aboutUs} className="">
                                <div className="nav-item">
                                    <span className="kool-share_01 icon"></span>
                                    <span className="nav-text">About us</span>
                                </div>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="popular-tags-container">
                    <PopularTags
                        headingText='Popular Tags'
                        tagLink='architecture'
                        tagText='#architecture'
                    />
                </div>
            </div>
        );
    }
}

export default LeftSidebar;
