import axios from 'axios';
import API from '../config/Api';
export const FETCH_SEARCHED_COMPANY_LIST_BEGIN = 'FETCH_SEARCHED_COMPANY_LIST_BEGIN';
export const FETCH_SEARCHED_COMPANY_LIST_SUCCESS = 'FETCH_SEARCHED_COMPANY_LIST_SUCCESS';
export const FETCH_SEARCHED_COMPANY_LIST_FAILURE = 'FETCH_SEARCHED_COMPANY_LIST_FAILURE';


export const fetchSearchCompanyListsBegin = () => ({
	type: FETCH_SEARCHED_COMPANY_LIST_BEGIN,
});

export const fetchSearchCompanyListsSuccess = companySearchlist => ({
	type: FETCH_SEARCHED_COMPANY_LIST_SUCCESS,
	payload: {
		companySearchlist
	}
});

export const fetchSearchCompanyListsFailure = error => ({
	type: FETCH_SEARCHED_COMPANY_LIST_FAILURE,
	payload: {
		error
	}
});

export function fetchSearchedCompanyLists(companyIds) {
	return dispatch => {
		dispatch(fetchSearchCompanyListsBegin());
		axios.post(`${API.SEARCHED_DATA}`, {
			data: companyIds
		}).then((response) => {
			// fetchTopIndustries()
			dispatch(fetchSearchCompanyListsSuccess(response.data));
		}).catch((error) => {
			dispatch(fetchSearchCompanyListsFailure(error));
		});
	};
}