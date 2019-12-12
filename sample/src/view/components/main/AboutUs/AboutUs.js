import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { Headings, CustomBackground, CTA } from '../../common';
import { Quotes, SuggestedIcon, BlogIcon, getTouch } from '../../../../assets/images';
import { Link } from "react-router-dom";
import Footer from '../../../layout/defaultLayout/footer/Footer';

class AboutUs extends Component {
    render() {
        return (
            <div className="about-us">
                <Helmet>
                    <title>Kool Kanya | About Us</title>
                    <meta data-react-helmet="true" property="og:description" content="Kool Kanyas mission is to create a nuturing ecosystem for women to connect with each other and build careers they love." />
                </Helmet>
                <div className="banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10">
                                <div className="row justify-content-center">
                                    <div className="col-lg-10">
                                        <div className="banner-heading">
                                            <label className="page-title">About us</label>
                                            <Headings
                                                HeadingClass=""
                                                tagName="h1"
                                                head="We are here to create the "
                                                highlightHead="workforce of the&nbsp; &nbsp;future"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="banner-image">
                        <img src="https://d1cyc6cu4jw433.cloudfront.net/about/about-us.jpg" alt="About-us" />
                    </div>
                </div>
                <div className="mission-banner">
                    <div className="container">
                        <div className="banner-card">
                            <div className="row justify-content-center ">
                                <div className="col-md-9">
                                    <p>Our mission is to create a nurturing ecosystem for women to connect with each
                                        other and build careers they love</p>
                                </div>
                            </div>
                            <div className="quotes">
                                <img src={Quotes} alt={Quotes}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="values">
                    <div className="container">
                        <Headings
                            HeadingClass="banner-heading"
                            tagName="h2"
                            head="Our"
                            highlightHead="&nbsp;Values&nbsp;"
                        />
                        <div className="values-category">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="values-card">
                                        <h3>Transparency</h3>
                                        <p>The trust and transparency we embody are reflected in the
                                            relationship we have with our community and other businesses we
                                            work with.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="values-card">
                                        <h3>Empathy</h3>
                                        <p>We have the ability to experience, relate to the thoughts, emotions
                                            and experiences of others in our team and those of our community.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="values-card">
                                        <h3>Self-Drive</h3>
                                        <p>We are enthusiastic and passionate about the work we do and we
                                            will do what it takes to work towards common goals.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="values-card">
                                        <h3>Failing Forward</h3>
                                        <p>We are willing to make mistakes, learn quickly and move ahead.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="values-card mb-0">
                                        <h3>User Centric</h3>
                                        <p>We promise to always act in the best interest of our community and
                                            offer them a seamless experience.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* background small left */}
                    <CustomBackground
                        className="bg-about-1 d-none d-sm-block"
                    />

                    {/* background small right top */}
                    <CustomBackground
                        className="bg-about-2 d-none d-sm-block"
                    />
                </div>

                {/* what we do */}
                <div className="what-we-do">
                    <div className="container">
                        <Headings
                            HeadingClass="banner-heading"
                            tagName="h2"
                            head="What"
                            highlightHead="&nbsp;we do&nbsp;"
                        />
                        <div className="row justify-content-center">
                            <div className="col-md-12">
                                <div className="what-we-do-card">
                                    <div className="row">
                                        <div className="col-md-3 d-flex align-items-center justify-content-center">
                                            <div className="picture">
                                                <img src={SuggestedIcon}
                                                     alt="Suggest the best companies and jobs based on user’s interest"/>
                                            </div>

                                        </div>
                                        <div className="col-md-9">
                                            <div className="description">
                                                <h3>Suggest the best Companies and jobs
                                                    based on your interest</h3>
                                                <p>
                                                    The career advice we offer ranges from how to network, to
                                                    everyday work advice, to financial management. You can also view
                                                    companies and jobs based on your preferred sector and
                                                    requirements.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="what-we-do-card">
                                    <div className="row">
                                        <div className="col-md-3 d-flex align-items-center justify-content-center">
                                            <div className="picture">
                                                <img src={BlogIcon} alt="Get career guidance from our power reads"/>
                                            </div>

                                        </div>
                                        <div className="col-md-9">
                                            <div className="description">
                                                <h3>Provide career guidance through our
                                                    Power Reads</h3>
                                                <p> The career advice we offer ranges from how to network, to
                                                    everyday work advice, to financial management. You can also view
                                                    companies and jobs based on your preferred sector and
                                                    requirements.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="what-we-do-card">
                                    <div className="row">
                                        <div className="col-md-3 d-flex align-items-center justify-content-center">
                                            <div className="picture">
                                                <img src={getTouch} alt="Get in touch with a Kool Kanya"/>
                                            </div>

                                        </div>
                                        <div className="col-md-9">
                                            <div className="description">
                                                <h3>Connect you with a Kool Kanya</h3>
                                                <p> Feeling stuck in your career? Looking to start something new?
                                                    Going through a major change in life? Get matched to a Kool Kanya
                                                    who has been through a similar career trajectory as yours. You will
                                                    find a space to share your concerns, and seek a solution to your
                                                    problems.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Team */}
                    <div className="container">
                        <div className="team-about-wrapper">
                            <div className="row">
                                <div className="col-md-8 column-wrapper">
                                    <div className="team-about-card">
                                        <img src="https://d1cyc6cu4jw433.cloudfront.net/about/about-first.jpg" alt="about" />
                                    </div>
                                </div>
                                <div className="col-md-4 column-wrapper">
                                    <div className="team-about-card">
                                        <img src="https://d1cyc6cu4jw433.cloudfront.net/about/about-second.jpg" alt="about" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 column-wrapper">
                                    <div className="team-about-card">
                                        <img src="https://d1cyc6cu4jw433.cloudfront.net/about/about-third.jpg" alt="about" />
                                    </div>
                                </div>
                                <div className="col-md-8 column-wrapper">
                                    <div
                                        className="team-about-card mb-0 d-flex align-items-center justify-content-center">
                                        <div className="caption text-card text-center">
                                            <label>Our Team</label>
                                            <h3>Know us better</h3>
                                            <Link to={"team"}>
                                                <div className="btn-wrapper">
                                                    <button className="btn btn-purple-fill text-uppercase">Meet Our
                                                        Team
                                                    </button>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* cta */}
                <CTA/>
                <Footer />
            </div>

        );
    }
}

export default AboutUs;
