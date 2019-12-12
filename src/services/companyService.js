import API from "../config/Api";
import http from "../config/Interceptor";

export function getCompanyDetails(Id) {
    let URL = API.COMPANY_DETAIL + Id;
    return http.get(URL)
}
