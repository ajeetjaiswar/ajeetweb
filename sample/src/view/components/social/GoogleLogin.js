import React, { Component } from "react";
import { GoogleLogin } from 'react-google-login';
import config from './config'
import { connect } from "react-redux";
import { SocialAction } from "../../../actions/UserActions";
import { GoogleIcon } from "../../../assets/images";
import { getOr } from 'lodash/fp';
import RouterConstants from '../../../constants/routerConstants';

class GLogin extends Component {

    //Marks :- google response

    responseGoogle = (response) => {
        this.setState({ isLoading: true })
        let obj = {
            email: getOr(null, 'w3.U3', response),
            lastName: getOr(null, 'w3.wea', response),
            firstName: getOr(null, 'w3.ofa', response),
            password: "",
            type: "google",
            socialId: getOr(null, 'w3.Eea', response),
            deviceId: (Math.floor(900000 * Math.random()) + 100000).toString(),
            deviceToken: (Math.floor(900000 * Math.random()) + 100000).toString(),
            platForm: "web",
            gender: "female",
            avtar: getOr(null, 'profileObj.imageUrl', response),
        }
        // Marks :- social-login  action 

        this.props.SocialAction(obj)
            .then(response => {
                if (response === "Success") {
                    this.props.history.push(RouterConstants.home);
                } else {
                    this.setState({ isLoading: false })
                }
            }).catch(e => {
                // console.log(e)
            })

    }

    //Marks:- rendering ui element

    render() {
        let googleContent;
        googleContent = (
            <GoogleLogin
                clientId={config.google}
                render={renderProps => (
                    <button className="btn-google btn d-flex align-items-center justify-content-center" onClick={renderProps.onClick}>
                        <span className="pr-sm-1"><img src={GoogleIcon} alt={GoogleIcon} /></span>
                        <span className="d-none d-sm-block">GOOGLE</span>
                    </button>
                )}
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
            />)
        return <li>{googleContent}</li>;
    }

}
const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, { SocialAction })(GLogin);
