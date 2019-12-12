import React, {Component} from 'react';
import Logo from "../../layout/defaultLayout/headerWrapper/header/Logo";
import Button from "../common/Buttons/Button";
import {forgotPassword} from "../../../services/usersService";
import {constants} from "../../../constants/constant";
import {KoolAlert} from "../common/KoolAlert";

class ForgotPassword extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            responseError: "",
            emailValidateError: "",
            successAlert: false,
            alertType: "",
            alertVisible: false
        }
    }

    redirectBack = () => {
        this.props.history.goBack();
    }

    handleValidation = () => {
        let emailValidateError = "";
        let formIsValid = true;

        const {email} = this.state;

        if (!email) {
            formIsValid = false;
            emailValidateError = constants.Errors.BlankEmailError;
        }
        if (email) {
            if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
                formIsValid = false;
                emailValidateError = constants.Errors.EmailFormatError;
            }
        }
        this.setState({emailValidateError: emailValidateError});
        return formIsValid;
    }

    handleEmailSubmit = (e) => {
        e.preventDefault();

        let {email} = this.state;
        let obj = {
            email: email,
        }
        if(this.handleValidation()) {
            forgotPassword(obj)
                .then(response => {
                    // localStorage.setItem('accessToken', '5432345654323454343');
                    // this.props.history.push('/');
                    if (response.data.statusCode == 1) {
                        this.setState({
                            alertVisible: true,
                            alertType: 1,
                            loaderOpen: false,
                            email: "",
                            responseError: constants.ForgetEmailSentMesaage
                        }, function () {

                        })
                        //this.props.history.push('/');
                    } else {
                        this.setState({
                            alertVisible: true,
                            alertType: 2,
                            loaderOpen: false,
                            responseError: response.data.error.errorMessage
                        })
                    }
                }).catch(e => {
                this.setState({
                    alertType: 2,
                    loaderOpen: false,
                    alertVisible: true,
                    responseError: "Something went wrong"
                })
            })
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            emailValidateError: '',
            alertVisible: false
        })

    }

    render() {
        let {responseError, emailValidateError, alertType, alertVisible, email} = this.state;

        return (
            <div className="auth-container without-banner">
                <Logo classLogo="desktop-logo d-flex align-items-center"/>

                <div className="auth-wrapper">
                    <div className="row m-0">
                        <div className="col-md-12">
                            <div className="auth-form-body">
                                <div className="auth-header">
                                    <h2>Forgot Password</h2>
                                    <label className="mt-2">We’ll help you reset it back</label>
                                    <KoolAlert
                                        alertVisible={alertVisible}
                                        alertType={alertType}
                                        label={responseError}
                                    />
                                </div>

                                <div className="auth-body">
                                    <form onSubmit={this.handleEmailSubmit}>
                                        <div className="form-group text-left">
                                            <label htmlFor="pwd">Email</label>
                                            <input
                                                type="text"
                                                //maxLength={40}
                                                className="form-control"
                                                placeholder="Email"
                                                name="email"
                                                // value={email}
                                                onChange={this.handleChange}
                                            />
                                            <span className="custom-alert">{emailValidateError}</span>
                                        </div>
                                        <div className="auth-footer">
                                            <Button btnClass="btn-primary-fill btn"
                                                    btnText={"RESET PASSWORD"}
                                                    btnType={'Submit'}
                                                    onClick={this.handleEmailSubmit}/>
                                        </div>
                                        <div className="back-wrapper text-center">
                                            <Button
                                                btnClass="btn btn-transparent cursor-pointer expand d-inline-block"
                                                btnText="Back"
                                                btnClickEvent={this.redirectBack}
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

export default ForgotPassword;
