import React, {Component} from 'react';
import Button from "../common/Buttons/Button";
import connect from "react-redux/es/connect/connect";
import {SocialAction} from "../../../actions/UserActions";
import Logo from '../../layout/defaultLayout/headerWrapper/header/Logo';
import {KoolAlert} from "../common/KoolAlert";
import {getOr} from 'lodash/fp';
import {Loader} from '../../../assets/SvgIcon';
import RouterConstants from '../../../constants/routerConstants';
import {constants} from "../../../constants/constant";

class EmailInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            errors: [],
            loader: false
        }
    }

    //Marks:- valuechange

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

    //Marks:- email validation

    handleSignupValidation = () => {
        let errors = {};
        let formIsValid = true;
        const {email} = this.state;
        if (!email) {
            formIsValid = false;
            errors["email"] = constants.Errors.BlankEmailError;
        }
        if (email) {
            if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
                formIsValid = false;
                errors["email"] = constants.Errors.BlankEmailError;
            }
        }
        this.setState({errors: errors});
        return formIsValid;
    }

    //Marks:- handle signup process
    handleSignupSubmit = (e) => {
        e.preventDefault();
        let {email} = this.state;
        if (this.handleSignupValidation()) {
            let data = {
                email: email,
                lastName: getOr(null, 'res.last_name', this.props.location.state),
                firstName: getOr(null, 'res.first_name', this.props.location.state),
                password: "",
                type: "facebook",
                socialId: getOr(null, 'res.userID', this.props.location.state),
                deviceId: (Math.floor(900000 * Math.random()) + 100000).toString(),
                deviceToken: (Math.floor(900000 * Math.random()) + 100000).toString(),
                platForm: "web",
                avtar: getOr(null, 'res.picture.data.url', this.props.location.state)
            }
            this.setState({loader: true})
            this.props.SocialAction(data)
                .then(responseJson => {
                    this.setState({loader: false})
                    if (responseJson === "Success") {
                        this.props.history.push(RouterConstants.home);
                    }
                }).catch(e => {
                this.setState({loader: false})
            })
        }
    }

    //Marks:- rendering ui element

    render() {
        const {errors, responseError, alertType, alertVisible, loader} = this.state;
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
                <div className="auth-wrapper" style={{paddingBottom: 0}}>
                    <div className="row m-0" style={{height: '100vh'}}>
                        <div className="col-xl-4 d-none d-xl-block auth-banner pl-0">
                            <img src={require('../../../assets/images/auth/bitmap.png')}
                                 style={{height: 'auto', width: '100%'}} alt={'logo'}
                            />
                        </div>
                        <div className="col-xl-8 ml-auto">
                            <div className="auth-form-body">
                                <div className="auth-header">
                                    <h2>Join Us</h2>
                                    <label>You don't have any email address . So you need to enter email address
                                        manually to complete the join us proccess.</label>

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
                                            <label htmlFor="pwd">Email address</label>
                                            <input
                                                type="text"
                                                //maxLength={40}
                                                className="form-control"
                                                placeholder="Email"
                                                name="email"
                                                // value={email}
                                                onChange={this.handleChange}
                                            />
                                            <span className="custom-alert">{errors["email"]}</span>
                                        </div>
                                        <div className="auth-footer">
                                            <Button btnClass="btn btn-primary-fill"
                                                    btnText={"DONE"}
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
export default connect(mapStateToProps, {SocialAction})(EmailInput);
