import axios from 'axios';
import API from '../config/Api';
export const FECTH_COMPANY_LIST_BEGIN = 'FECTH_COMPANY_LIST_BEGIN';
export const FECTH_COMPANY_LIST_SUCCESS = 'FECTH_COMPANY_LIST_SUCCESS';
export const FECTH_COMPANY_LIST_FAILURE = 'FECTH_COMPANY_LIST_FAILURE';


export const fetchCompanyListBegin = () => ({
	type: FECTH_COMPANY_LIST_BEGIN,
});

export const fetchCompanyListSuccess = companyList => ({
	type: FECTH_COMPANY_LIST_SUCCESS,
	payload: {
		companyList,
	},
});

export const fetchCompanyListFailure = error => ({
	type: FECTH_COMPANY_LIST_FAILURE,
	payload: {
		error,
	},
});

export function fetchCompanyList(filter, skip = '', limit = '') {
	return dispatch => {
		dispatch(fetchCompanyListBegin());
		axios.post(`${API.COMPANY_LIST}?skip=${skip}&limit=${limit}`, {
			data: filter
		})
			.then((response) => {
				dispatch(fetchCompanyListSuccess(response.data));
			}).catch((error) => {
				dispatch(fetchCompanyListFailure(error));
			});
	};
}