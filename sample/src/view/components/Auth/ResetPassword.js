import React, {Component} from 'react';
import Logo from "../../layout/defaultLayout/headerWrapper/header/Logo";
import Button from "../common/Buttons/Button";
import {Cancel, EyeIcon} from "../../../assets/SvgIcon";
import {resetPasswordUser} from "../../../services/usersService";
import {KoolAlert} from "../common/KoolAlert";
import {Loader} from "../../../assets/SvgIcon";
import RouterConstants from '../../../constants/routerConstants';
import {constants} from "../../../constants/constant";

class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: [],
            showConfirmPassword: false,
            responseError: "",
            newPassword: "",
            confirmPassword: "",
            loader: false,
        }
    }

    handleChange = e => {
        let errors = this.state.errors;
        if (e.target.value) {
            errors[e.target.name] = ''
        }
        this.setState({
            [e.target.name]: e.target.value,
            errors: errors,
            responseError: '',
        })
    }
    handleValidation = () => {
        let errors = [];
        let formIsValid = true;
        let {newPassword, confirmPassword} = this.state;

        if (!newPassword) {
            formIsValid = false;
            errors["newPassword"] = constants.Errors.BlankNewPasswordError;
        }
        if (newPassword) {
            //var pattern = ;
            if (!newPassword.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*]{6,}$/)) {
                formIsValid = false;
                errors["newPassword"] = constants.Errors.PasswordFormatError;
            }
        }
        if (!confirmPassword) {
            formIsValid = false;
            errors["confirmPassword"] = constants.Errors.BlankConfirmPasswordError;
        }
        if (newPassword && confirmPassword) {
            if (newPassword !== confirmPassword) {
                formIsValid = false;
                errors["confirmPassword"] = constants.Errors.PasswordMatchError;
            }
        }
        this.setState({errors: errors});
        return formIsValid;
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        let self = this;
        let {newPassword, confirmPassword} = this.state;

        if (this.handleValidation()) {
            let token = this.props.match.params.id;

            let obj = {
                'password': newPassword,
                'confirmPassword': confirmPassword
            }
            this.setState({loader: true});
            resetPasswordUser(obj, token)
                .then(res => {
                    if (res.data.statusCode == 1) {
                        self.setState({
                            loaderOpen: false,
                            alertVisible: true,
                            alertType: 1,
                            loader: false,
                            confirmPassword: "",
                            newPassword: "",
                            responseError:constants.SUCCESS_MESG.PasswordChangeMesg,
                        })

                        //this.props.history.push('/success');
                    } else {
                        self.setState({
                            loaderOpen: false,
                            alertVisible: true,
                            alertType: 2,
                            loader: false,
                            responseError: res.data.error.errorMessage
                        })
                    }
                }).catch(e => {
                this.setState({
                    loaderOpen: false,
                    alertVisible: true,
                    alertType: 2,
                    loader: false,
                    responseError: constants.Errors.DefaultError
                })
            })
        }
    }

    handleConfirmShowPassword = () => this.setState({showConfirmPassword: !this.state.showConfirmPassword})

    redirectBack = () => {
        this.props.history.push(RouterConstants.login);
    }

    render() {
        let {showConfirmPassword, newPassword, confirmPassword, errors, alertType, alertVisible, responseError, loader} = this.state;
        return (
            <div className="auth-container without-banner">
                <Logo classLogo="desktop-logo d-flex align-items-center"/>
                {loader ? <Loader/> : null}
                <div className="auth-wrapper">
                    <div className="row m-0">
                        <div className="col-md-12">
                            <div className="auth-form-body">
                                <div className="auth-header">
                                    <h2>Reset Password</h2>
                                    <label className="mt-2">We’ll help you reset it back</label>
                                    <KoolAlert
                                        alertVisible={alertVisible}
                                        alertType={alertType}
                                        label={responseError}
                                    />
                                </div>

                                <div className="auth-body mt-3">
                                    <form onSubmit={this.handleFormSubmit}>
                                        <div className="form-group text-left ">
                                            <label htmlFor="pwd">New Password</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                type={'password'}
                                                placeholder="New Password"
                                                name="newPassword"
                                                value={newPassword}
                                                onChange={this.handleChange}
                                            />
                                            <span className="custom-alert">{errors["newPassword"]}</span>
                                        </div>
                                        <div className="form-group text-left">
                                            <label htmlFor="pwd">Confirm Password</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                type={`${showConfirmPassword ? 'text' : 'password'}`}
                                                placeholder="Confirm Password"
                                                name="confirmPassword"
                                                value={confirmPassword}
                                                onChange={this.handleChange}
                                            />
                                            <span onClick={this.handleConfirmShowPassword} className="cm_eyeIcon">
                                                {showConfirmPassword ?
                                                    <Cancel/> : <EyeIcon/>}
                                            </span>
                                            <span className="custom-alert">{errors["confirmPassword"]}</span>
                                            <br/>
                                            {/* <span className="custom-alert">{responseError}</span> */}
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
                                                btnText="Cancel"
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

export default ResetPassword;
