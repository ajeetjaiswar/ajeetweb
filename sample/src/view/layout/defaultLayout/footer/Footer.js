import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Facebook from "../../../../assets/images/icons/facebook.png";
import LinkedIn from "../../../../assets/images/icons/linkedin.svg";
import Twitter from "../../../../assets/images/icons/twitter.png";
import Instagram from "../../../../assets/images/icons/instagram.png";
import Logo from '../headerWrapper/header/Logo';
import RouterConstants from '../../../../constants/routerConstants';

class Footer extends Component {

    goToBlog = () => {
        window.location.href = '/blogs';
    }

    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="logo-copyright d-flex flex-column align-items-center d-md-block h-100">
                                <Logo classLogo="footer-logo" />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="row">
                                <div className="col-md-6 col-lg-4">
                                    <div className="quick-link">
                                        <h4>Quick Links</h4>
                                        <ul className="list-unstyled">
                                            <li>
                                                <Link to={RouterConstants.aboutUs} className="expand">About Us</Link>
                                            </li>
                                            <li>
                                                <Link to={RouterConstants.team} className="expand">Our Team</Link>
                                            </li>
                                            <li>
                                                <Link to={RouterConstants.companies} className="expand">Companies</Link>
                                            </li>
                                            <li>
                                                <a className="expand cursor-pointer" onClick={this.goToBlog}>Blogs</a>
                                                {/* <Link to="/blogs" className="expand">Blog</Link> */}
                                            </li>
                                        </ul>
                                    </div>
                                </div>


                                <div className="col-md-6 col-lg-4">
                                    <div className="quick-link">
                                        <h4>Community</h4>
                                        <ul className="list-unstyled">
                                            <li>
                                                <Link to={RouterConstants.faq} className="expand">FAQs</Link>
                                            </li>
                                            <li>
                                                <Link to={RouterConstants.terms} className="expand">Terms of Use</Link>
                                            </li>
                                            <li>
                                                <Link to={RouterConstants.privacyPolicy} className="expand">Privacy Policy</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-4">
                                    <div className="social-link">
                                        <h4>Follow us</h4>
                                        <ul className="list-unstyled">
                                            <li>
                                                <a href="https://www.facebook.com/KoolKanyaRaiseYourPower/" target="_blank">
                                                    <img src={Facebook} alt={Facebook} />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.linkedin.com/company/koolkanya/" target="_blank">
                                                    <img src={LinkedIn} alt={LinkedIn} />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://twitter.com/@koolkanya" target="_blank">
                                                    <img src={Twitter} alt={Twitter} />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.instagram.com/kool_kanya/" target="_blank">
                                                    <img src={Instagram} alt={Instagram} />
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="mobile-btn-wrapper d-block d-sm-none">
                                            <button className="btn btn-primary-fill" onClick={this.goToHome}>JOIN NOW</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="copyright">
                                <label className="mt-auto">Kool Kanya 2019. Copyrights Reserved.</label>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
