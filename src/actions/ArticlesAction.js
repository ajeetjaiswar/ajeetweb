import axios from 'axios';
import API from '../config/Api';
export const FECTH_POWER_READS_BEGIN =   'FECTH_POWER_READS_BEGIN';
export const FECTH_POWER_READS_SUCCESS = 'FECTH_POWER_READS_SUCCESS';
export const FECTH_POWER_READS_FAILURE = 'FECTH_POWER_READS_FAILURE';


export const fetchPowerReadBegin = () => ({
	type: FECTH_POWER_READS_BEGIN,
});

export const fetchPowerReadSuccess = powerReads => ({
	type: FECTH_POWER_READS_SUCCESS,
	payload: {
		powerReads,
	},
});

export const fetchPowerReadFailure = error => ({
	type: FECTH_POWER_READS_FAILURE,
	payload: {
		error,
	},
});

export function fetchPowerReads() {
	return dispatch => {
		dispatch(fetchPowerReadBegin());
		axios.get(`${API.POWER_READS}`)
			.then((response) => {
				dispatch(fetchPowerReadSuccess(response.data));
			}).catch((error) => {
				dispatch(fetchPowerReadFailure(error));
			});
	};
}