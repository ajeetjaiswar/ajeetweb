import React, {Component} from 'react';
import {getOr} from 'lodash/fp';
import Button from "../common/Buttons/Button";
import connect from "react-redux/es/connect/connect";
import {SignupAction} from "../../../actions/UserActions";
import {EyeIcon, Cancel} from '../../../assets/SvgIcon';
import Logo from '../../layout/defaultLayout/headerWrapper/header/Logo';
import GLogin from "../social/GoogleLogin";
import FbLogin from "../social/FbLogin";
import LinkedInLogin from "../social/LinkedInLogin";
import {KoolAlert} from "../common/KoolAlert";
import {Loader} from '../../../assets/SvgIcon';
import {constants} from "../../../constants/constant";

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: false,
            email: '',
            password: '',
            fullName: '',
            errors: [],
            responseError: '',
            showPassword: false,
            alertType: "",
            alertVisible: false
        }
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
            responseError: '',
            alertVisible: false,
        })
    }
    //SIGNUPValidation
    handleSignupValidation = () => {
        let errors = {};
        let formIsValid = true;
        const {fullName, email, password} = this.state;
        if (!fullName) {
            formIsValid = false;
            errors["fullName"] = constants.USER.EmptyNameError;
        }
        if (fullName) {
            if (!fullName.match(/^[a-zA-Z ]+$/)) {
                formIsValid = false;
                errors["fullName"] = constants.USER.NameFormatError;
            }
        }
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
        if (password) {
            //var pattern = ;
            if (!password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*]{6,}$/)) {
                formIsValid = false;
                errors["password"] = constants.Errors.PasswordFormatError;
            }
        }
        this.setState({errors: errors});
        return formIsValid;
    }

    //SIGNUPActionCall

    handleSignupSubmit = (e) => {
        e.preventDefault();
        let {email, password, fullName} = this.state;
        if (this.handleSignupValidation()) {
            let data = {
                'deviceId': (Math.floor(900000 * Math.random()) + 100000).toString(),
                'deviceToken': (Math.floor(900000 * Math.random()) + 100000).toString(),
                'keyPlatform': "3",
                'email': email,
                'type': 'custom',
                'password': password,
                'firstName': fullName,
            }
            this.setState({loader: true});
            this.props.SignupAction(data).then(response => {
                if (response == "Success") {
                    // localStorage.setItem('accessToken', '5432345654323454343');
                    // this.props.history.push('/');
                    this.setState({
                        loader: false,
                        alertVisible: true,
                        alertType: 1,
                        responseError:constants.SUCCESS_MESG.EmailSent_mesg,
                        email: '',
                        password: '',
                        fullName: '',
                    })
                } else {
                    this.setState({
                        loader: false,
                        alertVisible: true,
                        alertType: 2,
                        responseError: getOr('Something went wrong', 'data.error.errorMessage', response)
                    })
                }
            }).catch(e => {
                this.setState({loader: false, responseError: "Something went wrong"})
            })
        }
    }

    //PasswordToggle
    handleShowPassword = () => this.setState({showPassword: !this.state.showPassword})

    render() {
        let {history} = this.props;
        const {errors, responseError, alertType, alertVisible, showPassword, loader, fullName, email, password} = this.state;
        return (
            <div className="auth-container">
                <Logo classLogo="desktop-logo  d-flex align-items-center"/>
                {loader ? <Loader/> : null}
                <div className="auth-page-header d-flex align-items-center">
                    <div
                        className="auth-inner-wrapper d-flex align-items-center  justify-content-end justify-sm-content-between w-100">
                        <p className="ml-auto d-none d-md-block">Already have an account?</p>
                        <Button
                            btnClickEvent={() => this.props.history.goBack()}
                            btnClass="btn-primary-outline border-radius-30 btn"
                            btnText={"LOGIN"}
                        />
                    </div>
                </div>
                <div className="auth-wrapper">
                    <div className="row m-0">
                        <div className="col-xl-4 d-none d-xl-block auth-banner pl-0">
                            <img src={require('../../../assets/images/auth/bitmap.png')}
                                 style={{height: 'auto', width: '100%'}} alt={'logo'}
                            />
                        </div>
                        <div className="col-xl-8 ml-auto">
                            <div className="auth-form-body">
                                <div className="auth-header">
                                    <h2>Join Us</h2>
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
                                    <form onSubmit={this.handleSignupSubmit}
                                          style={{flex: 1, alignItems: "center", marginTop: 33}}>
                                        <div className="form-group">
                                            <label htmlFor="pwd">Full Name</label>
                                            <input
                                                type="text"
                                                maxLength={40}
                                                className="form-control"
                                                placeholder="Full Name"
                                                name="fullName"
                                                value={fullName}
                                                onChange={this.handleChange}
                                            />
                                            <span className="custom-alert">
                                                {errors["fullName"]}
                                            </span>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="pwd">Email address</label>
                                            <input
                                                type="text"
                                                //maxLength={40}
                                                className="form-control"
                                                placeholder="Email"
                                                name="email"
                                                value={email}
                                                onChange={this.handleChange}
                                            />
                                            <span className="custom-alert">{errors["email"]}</span>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="pwd">Create Password</label>
                                            <input
                                                // type="password"
                                                className="form-control"
                                                type={`${showPassword ? 'text' : 'password'}`}
                                                placeholder="6 or more characters"
                                                name="password"
                                                value={password}
                                                onChange={this.handleChange}
                                            />
                                            <span onClick={this.handleShowPassword} className="cm_eyeIcon">
                                                {this.state.showPassword ?
                                                    <Cancel/> : <EyeIcon/>}
                                            </span>
                                            {errors["password"] ? <span
                                                className="custom-alert d-block">{errors["password"]}</span> : null}
                                        </div>


                                        <div className="auth-footer">
                                            <Button btnClass="btn btn-primary-fill"
                                                    btnText={"CREATE ACCOUNT"}
                                                    btnType={'Submit'}
                                                    btnClickEvent={this.handleSignupSubmit}/>
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

const mapStateToProps = state => {
    return {};
};
export default connect(mapStateToProps, {SignupAction})(Signup);
