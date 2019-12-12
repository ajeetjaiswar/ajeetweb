import API from '../config/Api';
import http from "../config/Interceptor";

// const accessToken = localStorage.getItem('accessToken');


export function registerUser(params) {
    return http.post(API.USER_REGISTER, params)
}

export function loginUser(params) {
    return http.post(API.USER_LOGIN, params)
}


export function logoutUser(token) {
    return http.post(API.USER_LOGOUT)
}


export function verifyEmail(token) {
    return http.post(API.EMAIL_VERIFICATION, token)
}


export function forgotPassword(params) {
    return http.post(API.USER_FORGOT_PASSWORD, params)
}

export function resetPasswordUser(params,token) {
    return http.post(API.USER_RESET_PASSWORD, params)
}

export function changePassword(obj,token) {
    return http.post(API.USER_CHANGE_PASSWORD, obj)
}

export function GetUserDetailsList(token) {
    return http.get(API.USER_PROFILE)

}

