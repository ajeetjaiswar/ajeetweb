import React, { Component } from 'react';
import { connect } from "react-redux";
import config from './config'
import { SocialAction } from "../../../actions/UserActions";
import { LinkedIn } from 'react-linkedin-login-oauth2';
import { LinkedInIcon } from '../../../assets/images';
import axios from 'axios'
import { getOr } from 'lodash/fp';
import API from '../../../config/Api';
import { Loader } from '../../../assets/SvgIcon';
import RouterConstants from '../../../constants/routerConstants';

class LinkedInLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: false
        }
    }
    //Marks :- linkedin success response 

    responseLinkedIn = (data) => {

        let self = this;

        const params = {
            'code': data.code,
            'url': `${window.location.origin}`,
        }

        const config = {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": API.AUTH,
            }
        }
        this.setState({ loader: true })
        axios.post(API.LINKEDIN_DATA, params, config).then(function (response) {
            self.setState({ loader: false })
            if (response.data.statusCode === 1) {
                let obj = {
                    "email": getOr(null, 'data.responseData.data.data.emailAddress', response),
                    "lastName": getOr(null, 'data.responseData.data.data.lastName', response),
                    "firstName": getOr(null, 'data.responseData.data.data.firstName', response),
                    "avtar": getOr(null, 'data.responseData.data.data.pictureUrl', response),
                    "password": "",
                    "type": "linkedin",
                    "socialId": getOr(null, 'data.responseData.data.data.id', response),
                    "deviceId": (Math.floor(900000 * Math.random()) + 100000).toString(),
                    "deviceToken": (Math.floor(900000 * Math.random()) + 100000).toString(),
                    "platForm": "web",
                }
                // Marks :- social-login action 

                self.props.SocialAction(obj).then(response => {
                    if (response === "Success") {
                        self.props.history.push(RouterConstants.home);
                    } else {

                    }
                }).catch(e => {
                    // console.log(e)
                })

            }
        }).catch((error) => {
            this.setState({ loader: false })
        });

    }

    //Marks :- linkedin failure response

    handleFailure = (error) => {
        // console.log(error)
    }

    //Marks:- rendering ui element

    render() {
        const { loader } = this.state;
        return (
            <li>
                {loader ? <Loader /> : null}
                <LinkedIn
                    clientId={config.linkedin}
                    onFailure={this.handleFailure}
                    onSuccess={this.responseLinkedIn}
                    redirectUri={`${window.location.origin}/linkedin`}
                    scope="r_liteprofile r_emailaddress"
                    state="34232423"
                    renderElement={({ onClick, disabled }) => (
                        <button className="btn-linked-in d-flex align-items-center justify-content-center btn" onClick={onClick} disabled={disabled}>
                            <span className="pr-sm-1"><img src={LinkedInIcon} alt={LinkedInIcon} /></span>
                            <span className="d-none d-sm-block">LINKEDIN</span>
                        </button>
                    )}>
                </LinkedIn>

            </li>
        );
    }
}
const mapStateToProps = (state) => {
    return {};
}

export default connect(mapStateToProps, { SocialAction })(LinkedInLogin);


