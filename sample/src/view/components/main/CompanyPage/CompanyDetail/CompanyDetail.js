import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { getOr } from 'lodash/fp';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import {
    MapMarker, CultureIcon, ReservationIcon, LearningApportunity,
    Maternity, Safety, WorkBalance, WorkSatisfaction, Wallet, SurveyImg, WebsiteIcon
} from '../../../../../assets/images';
import { Profile } from '../../../common';
import KoolCompanyCard from "./KoolCompanyCard";
import KoolScoreCard from "./KoolScoreCard";
import KoolMoreInfocard from "./KoolMoreInfocard";
import { getCompanyDetails } from "../../../../../services/companyService";
import { Loader } from "../../../../../assets/SvgIcon";
import Footer from '../../../../layout/defaultLayout/footer/Footer';
import { hyphenSeparatedUrls } from '../../../../../helpers/helperFunction';

var imageDict = {
    "Culture": CultureIcon,
    "Safety": Safety,
    "Learning Opportunity": LearningApportunity,
    "Maternity Benefits": Maternity,
    "Female Representation": ReservationIcon,
    "Job Satisfaction": WorkSatisfaction,
    "Work Life Balance": WorkBalance,
    "Salary Benefits": Wallet
}

class CompanyDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: '1',
            height: 0,
            companyData: {},
            loader: true,
        }
    }

    //component did mount
    componentDidMount() {
        const width = this.divElement.clientWidth;
        let { Id } = this.props.match.params;
        this.setState({ height: width });
        getCompanyDetails(Id).then(response => {
            if (response.status == 200) { // eslint-disable-line
                if (!response.data.ratings) {
                    this.setState({ activeTab: '2' })
                }
                this.setState({ companyData: response.data, loader: false });
                // this.setState({});
            }
        }).catch(e => {
            this.setState({ loader: false })
        });
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.Id !== prevProps.match.params.Id) {
            const width = this.divElement.clientWidth;
            let { Id } = this.props.match.params;
            this.setState({ height: width, loader: true });
            getCompanyDetails(Id).then(response => {
                if (response.status == 200) { // eslint-disable-line
                    if (!response.data.ratings) {
                        this.setState({ companyData: response.data, activeTab: '2', loader: false })
                    } else {
                        this.setState({ companyData: response.data, activeTab: '1', loader: false });
                    }
                }
            }).catch(e => {
                this.setState({ loader: false })
            });
        }
    }

    // componentDidUpdate() {
    //     const width = this.divElement.clientWidth;
    //     this.setState({height: width});
    // }

    goToWebsite = (websiteURL) => {
        if (!websiteURL.match(/^https?:\/\//i)) {
            websiteURL = 'http://' + websiteURL;
        }
        window.open(websiteURL, '_blank')
    }

    toggle = tab => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            })
        }
    }

    takeSurvey = () => {
        window.location.href = '/survey/start/'
    }

    render() {
        const { activeTab, companyData, loader } = this.state;
        let { logo, name, otherlocations, simlarcompanies, website } = companyData;
        let headoffice = (otherlocations && otherlocations.length > 0) ? otherlocations[0] : ''
        let similarCompanies = simlarcompanies ? simlarcompanies : []
        let top3personaratings = null;
        if (companyData.ratings && companyData.ratings > 0) {
            top3personaratings = companyData.personas.sort((a, b) => Number(b.rating) - Number(a.rating)).slice(0, 3);
        }
        let personaIcon = top3personaratings ? top3personaratings.map(element => {
            return (
                <li className="d-flex align-items-center">
                    <div className="achievement-icon">
                        <img src={imageDict[element.name]} alt="" />
                    </div>
                    <div className="item-text">
                        <h4>{element.name}</h4>
                        <p>{element.description}</p>
                    </div>
                </li>
            )
        }) : null;
        return (
            <div className="bg-light-wrapper">
                <Helmet>
                    <title>Kool Kanya | Top Companies for you</title>
                    <meta name="description" content="Our mission is to support women to find & build careers of their choice. We suggest the best companies and jobs based on user’s interest with Kool Kanya scores & analysis." />
                </Helmet>
                <div className="container">
                    <div className="company-wrapper">
                        {loader ? <Loader /> : null}
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="company-left-wrapper">
                                    <div className="company-profile">
                                        <div className="company-logo d-flex align-items-center justify-content-center">
                                            <img src={logo} alt={name} />
                                        </div>
                                        <div className="company-detail">
                                            <h2 className="company-name">
                                                {name}
                                            </h2>
                                            {headoffice ? <div className="company-address d-flex align-items-center">
                                                <span className="icon mr-2"><img src={MapMarker} alt="address" /></span>
                                                <span className="address">{headoffice}</span>
                                            </div> : null}
                                            {website ? <div className="company-address d-flex align-items-center">
                                                <span className="icon mr-2"><img src={WebsiteIcon} alt="address" /></span>
                                                <span className="color-text">
                                                    <a className="cursor-pointer" onClick={() => this.goToWebsite(website)}>
                                                        <u>{website}</u>
                                                    </a>
                                                </span>
                                            </div> : null}
                                        </div>
                                        <div
                                            className="company-page-btns d-flex align-items-center justify-content-between">
                                            {/* <button className="btn btn-primary-fill">Follow</button> */}
                                            <button className="btn btn-primary-fill" onClick={this.takeSurvey}>Take Survey</button>
                                            {/* <button className="btn btn-primary-outline" onClick={this.takeSurvey}>Take Survey</button> */}
                                            {/* <span><i className="kool-more"></i></span> */}
                                        </div>
                                    </div>
                                    {
                                        (top3personaratings && top3personaratings.length > 0) ?
                                            <div className="company-achievements">
                                                <h3>Achievements</h3>
                                                <ul className="achievement-item list-unstyled"> {personaIcon} </ul>
                                            </div>
                                            :
                                            null
                                    }
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="company-content-wrapper">
                                    {/*for desktop */}
                                    <Nav tabs className=" d-none d-sm-flex">
                                        {
                                            companyData.ratings
                                                ?
                                                <NavItem>
                                                    <NavLink
                                                        className={classnames({ active: activeTab === '1' })}
                                                        onClick={() => this.toggle('1')}
                                                    >Kool Kanya Score</NavLink>
                                                </NavItem>
                                                :
                                                null
                                        }

                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: activeTab === '2' })}
                                                onClick={() => this.toggle('2')}
                                            >About</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: activeTab === '3' })}
                                                onClick={() => this.toggle('3')}
                                            >More Information</NavLink>
                                        </NavItem>
                                    </Nav>
                                    {/* for mobile */}
                                    <Nav tabs className=" d-sm-none d-flex">
                                        {
                                            companyData.ratings
                                                ?
                                                <NavItem>
                                                    <NavLink
                                                        className={classnames({ active: activeTab === '1' })}
                                                        onClick={() => this.toggle('1')}
                                                    >Score</NavLink>
                                                </NavItem>

                                                :
                                                null
                                        }

                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: activeTab === '2' })}
                                                onClick={() => this.toggle('2')}
                                            >About</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: activeTab === '3' })}
                                                onClick={() => this.toggle('3')}
                                            >More</NavLink>
                                        </NavItem>
                                    </Nav>
                                    {/* tabs content for both mobile and desktop */}
                                    <TabContent activeTab={activeTab}>
                                        {
                                            companyData.ratings
                                                ?
                                                <TabPane tabId="1">
                                                    <KoolScoreCard data={companyData} />
                                                </TabPane>
                                                :
                                                null
                                        }
                                        <TabPane tabId="2">
                                            <KoolCompanyCard data={companyData} />
                                        </TabPane>
                                        <TabPane tabId="3">
                                            <KoolMoreInfocard data={companyData} />
                                        </TabPane>
                                    </TabContent>
                                </div>
                            </div>

                            <div className="col-lg-3">

                                <div className="company-right-wrapper">
                                    {similarCompanies.length > 0 && <div className="card-wrapper d-block">
                                        <div className='heading-wrap d-flex justify-content-between'>
                                            <h2>Suggested Companies</h2>
                                            <Link to='/companies' className="expand">See All</Link>
                                        </div>
                                        <div className='card-body-wrap suggested-company'>
                                            <ul className="list-unstyled">
                                                {similarCompanies.map(function (item, index) {
                                                    return (
                                                        <li>
                                                            <Link to={`/company/about/${hyphenSeparatedUrls(item.name)}/${item._id}`}>
                                                                <div className="talk-to-person d-flex align-items-canter">
                                                                    <div className="profile-wrapper">
                                                                        <Profile srcImage={item.logo} />
                                                                    </div>
                                                                    <div className="person-detail d-flex flex-column">
                                                                        <h4 className="mb-auto">{item.name}</h4>
                                                                        <label className=" mt-auto">
                                                                            {/* <img src={MapMarker} /> */}
                                                                            <span>{getOr('', 'otherlocations.0', item)}</span>
                                                                        </label>
                                                                    </div>
                                                                    <div className="ml-auto">
                                                                        <div className="koolk-badge-orange-opacity badge">
                                                                            {(item.ratings).toFixed(1)}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </li>)
                                                })}
                                            </ul>
                                        </div>
                                    </div>}
                                    <a className="cursor-pointer" onClick={this.takeSurvey}>
                                        <div className="take-survey" ref={(divElement) => this.divElement = divElement}
                                            style={{ height: this.state.height }}>
                                            <img src={SurveyImg} className="w-100" />
                                            <div className="survey-caption-wrap">
                                                <div className="survey-caption ">
                                                    <p>Contribute to a better workplace</p>
                                                    <a className="cursor-pointer" onClick={this.takeSurvey}>
                                                        <u>Take survey</u>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default CompanyDetail;
