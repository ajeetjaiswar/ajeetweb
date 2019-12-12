import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, AskAndAnswer, Company, CompanyDetail } from '../../../components';
import SearchResults from '../../../components/main/CompanyPage/SearchResults';
import Login from "../../../../view/components/Auth/Login";
import Signup from "../../../../view/components/Auth/Signup";
import ForgotPassword from "../../../../view/components/Auth/ForgotPassword";
import ResetPassword from "../../../../view/components/Auth/ResetPassword";
import EmailVerification from "../../../../view/components/Auth/EmailVerification";
import LandingPage from '../../../../view/components/main/LandingPage/LandingPage';
import { LinkedInPopUp } from 'react-linkedin-login-oauth2';
import EmailInput from '../../../../view/components/Auth/EmailInput';
import { AboutUs } from '../../../../view/components';
// import Company from "../../../../view/components/main/CompanyPage/Company";
import PageNotFound from '../../../../view/components/main/404';
import KoolKanyaTeam from "../../../components/main/AboutUs/KoolKanyaTeam";
import FAQContainer from "../../../components/main/FAQContainer";
import TermsOfUse from "../../../components/main/TermsOfUse";
import PrivacyPolicy from "../../../components/main/PrivacyPolicy";
import RouterConstants from '../../../../constants/routerConstants';
// import CompanyDetail from "../../../../view/components/main/CompanyPage/CompanyDetail/CompanyDetail";


class ContentWrapper extends Component {
    render() {
        return (
            <Switch>
                <Route exact path={RouterConstants.landing} component={LandingPage} />
                {/* <Route exact path={RouterConstants.home} component={Home}/> */}
                <Route exact path={RouterConstants.askAndAnswer} component={AskAndAnswer} />
                {/* <Route path={RouterConstants.linkedin} component={LinkedInPopUp} /> */}
                {/* <Route path={RouterConstants.login} component={Login} /> */}
                {/* <Route path={RouterConstants.signUp} component={Signup} /> */}
                <Route path={RouterConstants.aboutUs} component={AboutUs} />
                <Route path={RouterConstants.team} component={KoolKanyaTeam} />
                <Route path={RouterConstants.faq} component={FAQContainer} />
                <Route path={RouterConstants.terms} component={TermsOfUse} />
                <Route path={RouterConstants.privacyPolicy} component={PrivacyPolicy} />
                {/* <Route path={RouterConstants.emailInput} component={EmailInput} /> */}
                {/* <Route path={RouterConstants.forgotPassword} component={ForgotPassword} /> */}
                {/* <Route path={`${RouterConstants.resetPassword}/:id`} component={ResetPassword} /> */}
                {/* <Route path={`${RouterConstants.verifyEmail}/:token`} component={EmailVerification} /> */}
                <Route exact path={RouterConstants.companies} component={Company} />
                {/* <Route path="/company/detail/:Id" component={CompanyDetail} /> */}
                <Route path={`${RouterConstants.aboutCompany}/:name/:Id`} component={CompanyDetail} />
                <Route path={RouterConstants.companySearch} component={SearchResults} />
                <Route exact path={`${RouterConstants.companyIndustry}/:industryname/:industryid`} component={Company} />
                <Route exact path={`${RouterConstants.companyLocation}/:locationname/:locationid`} component={Company} />
                {/* <Route path="/home" component={Portal} /> */}
                <Route exact path="*" component={PageNotFound} />
            </Switch>
        );
    }
}

export default ContentWrapper;
