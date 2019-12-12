import React, {Component} from 'react';
import Logo from "../../layout/defaultLayout/headerWrapper/header/Logo";
import Button from "../common/Buttons/Button";
import {Cancel, EyeIcon} from "../../../assets/SvgIcon";

class ChangePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errors:[],
            showOldPassword:false,
            showNewPassword:false,
            showConfirmPassword:false,
            responseError:""
        }
    }
    handleFormSubmit=(e)=>{
        e.preventDefault();

    }

    render() {
        let {showOldPassword,showNewPassword,showConfirmPassword, errors, responseError} = this.state;
        return (
            <div className="container-fluid back-ground-white">

                <div className="forget-wrapper">
                    <Logo/>
                </div>

                <div className="forget-body d-flex justify-content-center">
                    <div className="forget-box text-center mt-5">
                        <div>
                            <h2 className="mb-4">Reset Password</h2>
                        </div>
                        <form onSubmit={this.handleFormSubmit} className="text-left mt-4">
                            <div className="form-group">
                                <label htmlFor="pwd">Old Password</label>
                                <input
                                    type="password"
                                    minLength={6}
                                    className="form-control"
                                    type={`${showOldPassword ? 'text' : 'password'}`}
                                    placeholder="Password"
                                    name="oldPassword"
                                    // value={password}
                                    onChange={this.handleChange}
                                />
                                <span onClick={this.handleShowPassword} className="cm_eyeIcon">
                                        {showOldPassword ?
                                            <Cancel/> : <EyeIcon/>}
                                            </span>
                                <span className="custom-alert">{errors["oldPassword"]}</span>
                                <br/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="pwd">New Password</label>
                                <input
                                    type="password"
                                    minLength={6}
                                    className="form-control"
                                    type={`${showNewPassword ? 'text' : 'password'}`}
                                    placeholder="New Password"
                                    name="newPassword"
                                    // value={password}
                                    onChange={this.handleChange}
                                />
                                <span onClick={this.handleShowPassword} className="cm_eyeIcon">
                                        {showNewPassword ?
                                            <Cancel/> : <EyeIcon/>}
                                            </span>
                                <span className="custom-alert">{errors["newPassword"]}</span>
                                <br/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="pwd">Confirm Password</label>
                                <input
                                    type="password"
                                    minLength={6}
                                    className="form-control"
                                    type={`${showConfirmPassword ? 'text' : 'password'}`}
                                    placeholder="Confirm Password"
                                    name="confirmPassword"
                                    // value={password}
                                    onChange={this.handleChange}
                                />
                                <span onClick={this.handleShowPassword} className="cm_eyeIcon">
                                        {showConfirmPassword ?
                                            <Cancel/> : <EyeIcon/>}
                                            </span>
                                <span className="custom-alert">{errors["confirmPassword"]}</span>
                                <br/>
                                <span className="custom-alert">{responseError}</span>
                            </div>

                            <Button btnClass="btn-default btn"
                                    btnText={"RESET PASSWORD"}
                                    btnType={'Submit'}
                                    onClick={this.handleFormSubmit}/>
                        </form>


                    </div>


                </div>


            </div>
        );
    }
}

export default ChangePassword;
