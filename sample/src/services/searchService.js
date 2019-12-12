import axios from "axios";

export function searchCompany(inputValue) {
    return axios({
        method: 'get',
        url: `https://j1cj8pf8ip:5kbqdqmhl@holly-777655000.eu-west-1.bonsaisearch.net/global/_search?q=*${encodeURIComponent(inputValue)}*`,
        auth: {
            username: 'j1cj8pf8ip',
            password: '5kbqdqmhl',
        },
    })
}