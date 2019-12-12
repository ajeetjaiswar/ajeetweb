import React, { Component } from 'react';
import { getOr } from 'lodash/fp';
import Logo from "../../layout/defaultLayout/headerWrapper/header/Logo";
import Button from "../common/Buttons/Button";
import { verifyEmail } from "../../../services/usersService";
import { Loader } from "../../../assets/SvgIcon";
import { KoolAlert } from "../common/KoolAlert";
import RouterConstants from '../../../constants/routerConstants';

class EmailVerification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: true,
            error: false,
            responseMsg: ''
        }
    }

    componentDidMount() {
        let token = this.props.match.params.token;
        // hit api for email verification
        if (token) {
            verifyEmail(token)
                .then(res => {
                    const responseMsg = getOr('Something went wrong', 'data.responseData.message', res)
                    if (res.data.statusCode == 1) {
                        this.setState({
                            loader: false,
                            alertVisible: true,
                            alertType: 1,
                            responseMsg
                        })
                    } else {
                        this.setState({
                            loader: false,
                            alertVisible: true,
                            alertType: 2,
                            responseMsg
                        })
                    }
                }).catch(e => {
                    const responseMsg = getOr('Something went wrong', 'data.error.errorMessage', e)
                    this.setState({
                        loader: false,
                        alertVisible: true,
                        alertType: 2,
                        responseMsg
                    })
                })
        } else {
            this.setState({
                loader: false,
                alertVisible: true,
                alertType: 2,
                responseMsg: "Something went wrong"
            })
        }
    }


    redirectToLogin = () => {
        this.props.history.push(RouterConstants.login);
    }

    render() {
        let { alertType, alertVisible, responseMsg, loader } = this.state;
        return (
            <div className="auth-container without-banner">
                <Logo classLogo="desktop-logo d-flex align-items-center" />
                {loader ? <Loader /> : null}
                <div className="auth-wrapper">
                    <div className="row m-0">
                        <div className="col-md-12">
                            <div className="auth-form-body">
                                <div className="auth-header">
                                    <h2>Email Verification</h2>
                                    {/* <label className="mt-2">We’ll help you reset it back</label> */}
                                    <KoolAlert
                                        alertVisible={alertVisible}
                                        alertType={alertType}
                                        label={responseMsg}
                                    />
                                </div>

                                <div className="auth-body mt-3">
                                    <form onSubmit={this.handleFormSubmit}>
                                        <div className="back-wrapper text-center">
                                            <Button
                                                btnClass="btn btn-transparent cursor-pointer expand d-inline-block"
                                                btnText="Go To Login"
                                                btnClickEvent={this.redirectToLogin}
                                            />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EmailVerification;
