import axios from 'axios';
import API from '../config/Api';
import http from "../config/Interceptor";

// const accessToken = localStorage.getItem('accessToken');


export function createPost(data,token) {
    return http.post(API.USER_CREATE_POST, data)
}

export function getPost(token){
    return http.get(API.USER_GET_POST)

}

export function likePost(data,token){
    return http.post(API.USER_LIKE_POST, data)
}

export function postCommnet(data,token){
    return http.post(API.USER_POST_COMMENT, data)
}
export function interestedTags(data,token){
    return http.post(API.USER_INTERESTED_TAGS, data)
}




