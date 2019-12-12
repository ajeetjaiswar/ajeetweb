import React, { Component } from "react";
import { connect } from "react-redux";
import { SocialAction } from "../../../actions/UserActions";
import { FbIcon } from "../../../assets/images";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { getOr } from 'lodash/fp';
import { Loader } from '../../../assets/SvgIcon';
import config from './config'
import RouterConstants from '../../../constants/routerConstants';


class FbLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loader: false
        }
    }

    responseFacebook = response => {
        if (response.status == 'unknown') { // when user cancel the FB popup
            return;
        }

        if (!response.email) {
            // if not email is not fetched then send to emailInput screen.
            this.props.history.push(RouterConstants.emailInput, {
                res: response
            });
        } else {
            let obj = {
                email: getOr(null, 'email', response),
                lastName: getOr(null, 'last_name', response),
                firstName: getOr(null, 'first_name', response),
                password: "",
                type: "facebook",
                socialId: getOr(null, 'userID', response),
                deviceId: (Math.floor(900000 * Math.random()) + 100000).toString(),
                deviceToken: (Math.floor(900000 * Math.random()) + 100000).toString(),
                platForm: "web",
                avtar: getOr(null, 'picture.data.url', response)
            }
            this.setState({ loader: true })
            this.props.SocialAction(obj)
                .then(responseJson => {
                    this.setState({ loader: false })
                    if (responseJson === "Success") {
                        this.props.history.push(RouterConstants.home);
                    }
                }).catch(e => {
                    this.setState({ loader: false })
                })
        }
    };


    render() {
        let fbContent;
        let { loader } = this.state;
        fbContent = (
            <>
                <FacebookLogin
                    appId={config.facebook}
                    scope="public_profile,email"
                    fields="name,email,picture,first_name,last_name"
                    onClick={this.componentClicked}
                    cssClass="btn-facebook btn"
                    callback={this.responseFacebook}
                    render={renderProps => (
                        <button className="btn-facebook btn d-flex align-items-center justify-content-center" onClick={renderProps.onClick}>
                            <span className="pr-sm-1"><img src={FbIcon} alt={FbIcon} /></span>
                            <span className="d-none d-sm-block">FACEBOOK</span>
                        </button>
                    )}
                />
                {loader ? <Loader /> : null}
            </>
        );

        return <li>{fbContent}</li>;
    }
}
const mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps, { SocialAction })(FbLogin)
