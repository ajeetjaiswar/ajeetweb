import axios from 'axios';
import { some } from 'lodash';
import TokenFreeApis from './TokenFreeApi';
import API from "./Api";
import PrevApi from "./PrevApi";

/**
 * make custom axios request.
 */

const timeout = 20000;

const http = axios.create({
    timeout: timeout
});

const redirectUnAuth = (response) => {
    if (response.status == 401) {
        window.location.href = '/';
    }
}

const isTokenNeeded = (url) => {
    return !some(TokenFreeApis, (tokenFreeURL) => {
        return tokenFreeURL === url;
    })
}

const isBasicAuthorizationNeeded = (url) => {
    //return some(PrevApi,_.includes(url));
    return !some(PrevApi, (tokenFreeURL) => {
        return url.includes(tokenFreeURL);
    })
}


/**
 * Interceptor for api request.
 */

http.interceptors.request.use((request) => {
    // GET Token and add token to request if any api needed.
    // if (isTokenNeeded(request.url)) {
    //     request.headers.authToken = localStorage.getItem('acessToken')
    // }
    if (isBasicAuthorizationNeeded(request.url)) {
        request.headers.Authorization = API.AUTH;
    }

    return request;
}, error => Promise.reject(error));

/**
 * Interceptor for api response.
 */
http.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if (error.response) {
        redirectUnAuth(error.response);
        return Promise.reject(error.response.data);
    }
    if (error.message === 'Network Error') {
        // network error
        const networkError = {
            errorCodeList: ['NETWORK'],
        };
        return Promise.reject(networkError);
    } else if (error.message === `timeout of ${timeout}ms exceeded`) {
        // timeout error
        const timeoutError = {
            errorCodeList: ['TIMEOUT'],
        };
        return Promise.reject(timeoutError);
    }
    return Promise.reject(error);
});

export default http;
