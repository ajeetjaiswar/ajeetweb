import axios from "axios";
import API from "../config/Api";

export function addEmailInMailChimp(data) {
    return axios.post(API.ADD_EMAIL_TO_MAILCHIMP, data)
        // .then(function (response) {
        //     return response
        // })
        // .catch(function (error) {
        //     console.log(error)
        // })
}
