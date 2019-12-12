import React, {Component} from 'react';
import {Link} from "react-router-dom";
import classNames from 'classnames'
import Logo from "../../layout/defaultLayout/headerWrapper/header/Logo";
import {EyeIcon, Cancel} from '../../../assets/SvgIcon';
import {connect} from "react-redux";
import {LoginAction} from "../../../actions/UserActions";
import Button from "../common/Buttons/Button";
import GLogin from "../social/GoogleLogin";
import FbLogin from "../social/FbLogin";
import LinkedInLogin from "../social/LinkedInLogin";
import {KoolAlert} from "../common/KoolAlert";
import {Loader} from "../../../assets/SvgIcon";
import RouterConstants from '../../../constants/routerConstants';
import {constants} from "../../../constants/constant";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: false,
            email: '',
            password: '',
            emailErrorMsg: '',
            passwordErrorMsg: '',
            responseError: '',
            showPassword: false,
            errors: [],
            alertType: "",
            alertVisible: false
        }
    }

    // check btn
    checkFormValidation = () => {
        let {email, password} = this.state;
        if (!email || !password) {
            return true
        }
        if (!password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*]{6,}$/)) {
            return true;
        }
        return false;
    }

    //ValueChange
    handleChange = e => {
        let errors = this.state.errors;
        if (e.target.value) {
            errors[e.target.name] = ''
        }
        this.setState({
            [e.target.name]: e.target.value,
            errors: errors,
            responseError: ''
        })
    }

    //LOGINValidation
    handleValidation = () => {
        let errors = {};
        let formIsValid = true;

        const {email, password} = this.state;

        if (!email) {
            formIsValid = false;
            errors["email"] = constants.Errors.BlankEmailError;
        }
        if (email) {
            if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
                formIsValid = false;
                errors["email"] = constants.Errors.EmailFormatError;
            }
        }
        if (!password) {
            formIsValid = false;
            errors["password"] = constants.Errors.BlankPasswordError;
        }
        this.setState({errors: errors});
        return formIsValid;
    }

    //PASSWORDToggle
    handleShowPassword = () => this.setState({showPassword: !this.state.showPassword})

    //LOGINSubmitActionCall
    handleSubmit = (e) => {
        e.preventDefault();
        let {email, password} = this.state;
        // localStorage.setItem('accessToken', '5432345654323454343');
        if (this.handleValidation()) {
            let obj = {
                'email': email,
                'password': password
            }
            this.setState({loader: true})
            this.props.LoginAction(obj)
                .then(response => {
                    if (response == "Success") {
                        this.setState({loader: false})
                        this.props.history.push(RouterConstants.home)
                    } else {
                        this.setState({
                            loader: false,
                            alertVisible: true,
                            alertType: 2,
                            responseError: response.data.error.errorMessage
                        })
                    }
                }).catch(e => {
                console.log(e, 'Periscope account');
                this.setState({
                    loader: false,
                    responseError:constants.Errors.DefaultError})
            })
        }
    }

    render() {
        let {showPassword, errors, alertType, alertVisible, responseError, loader} = this.state;
        let {history} = this.props;
        return (
            <>
                <div className="auth-container">
                    <Logo classLogo="desktop-logo d-flex align-items-center"/>
                    {loader ? <Loader/> : null}
                    <div className="auth-page-header d-flex align-items-center">
                        <div
                            className="auth-inner-wrapper d-flex align-items-center justify-content-end justify-sm-content-between w-100">
                            <p className="ml-auto d-none d-md-block">Don’t have an account?</p>
                            <Button
                                btnClickEvent={() => this.props.history.push(RouterConstants.signUp)}
                                btnClass="btn-primary-outline border-radius-30 btn"
                                btnText={"SIGNUP"}
                            />
                        </div>
                    </div>
                    <div className="auth-wrapper">
                        <div className="row m-0">
                            <div className="col-xl-4 d-none d-xl-block auth-banner pl-0">
                                <img src={require('../../../assets/images/auth/bitmap.png')}
                                     style={{height: 'auto', width: '100%'}}
                                     alt={'banner'}
                                />
                            </div>
                            <div className="col-xl-8 ml-auto">
                                <div className="auth-form-body">
                                    <div className="auth-header">
                                        <h2>Login</h2>
                                        <label>with your social account</label>
                                        <ul className='d-flex justify-content-center px-md-4 list-unstyled'>
                                            <LinkedInLogin history={history}/>
                                            <GLogin history={history}/>
                                            <FbLogin history={history}/>


                                        </ul>
                                    </div>

                                    <div className="line-with-or">
                                        {/* line and or */}
                                    </div>
                                    <KoolAlert
                                        alertVisible={alertVisible}
                                        alertType={alertType}
                                        label={responseError}
                                    />
                                    <div className="auth-body">
                                        <form onSubmit={this.handleSubmit} style={{flex: 1, marginTop: 40}}>
                                            <div className="form-group">
                                                <label htmlFor="pwd">Email Address</label>
                                                <input
                                                    type="text"
                                                    maxLength={40}
                                                    className="form-control"
                                                    placeholder="Email"
                                                    name="email"
                                                    // value={email}
                                                    onChange={this.handleChange}
                                                />
                                                <span className="custom-alert">{errors["email"]}</span>

                                            </div>


                                            <div className="form-group">
                                                <label htmlFor="pwd">Password</label>
                                                <input
                                                    minLength={6}
                                                    className="form-control"
                                                    type={`${showPassword ? 'text' : 'password'}`}
                                                    placeholder="Password"
                                                    name="password"
                                                    // value={password}
                                                    onChange={this.handleChange}
                                                />
                                                <span onClick={this.handleShowPassword} className="cm_eyeIcon">
                                                    {this.state.showPassword ?
                                                        <Cancel/> : <EyeIcon/>}
                                                </span>
                                                <span className="custom-alert">{errors["password"]}</span>

                                                <div className="d-flex justify-content-end">
                                                    <Link className="fogotpass_link d-inline-block expand"
                                                          to={RouterConstants.forgotPassword}
                                                    >
                                                        <span className=" ">Forgot password?</span>
                                                    </Link>
                                                </div>
                                            </div>
                                            {/* <span
                                                onClick={() => this.props.history.push('forgot-password')}
                                                className="d-flex justify-content-end cursor-pointer">
                                                Forgot password?
                                      </span> */}
                                            <div className="auth-footer">
                                                <Button
                                                    btnClass={classNames('btn', 'btn-primary-fill', {'in-active': this.checkFormValidation()})}
                                                    btnText={"LOGIN"}
                                                    btnType={'Submit'}
                                                    onClick={this.handleSubmit}/>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
}

export default connect(mapStateToProps, {LoginAction})(Login);



