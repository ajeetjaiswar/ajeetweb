import {
    FECTH_COMPANY_LIST_BEGIN,
    FECTH_COMPANY_LIST_SUCCESS,
    FECTH_COMPANY_LIST_FAILURE
} from '../actions/CompanyAction';

const initialState = {
    items: {
  
    },
    loading: false,
    error: null
  };

export default function companyReducer(state = initialState, action) {
    switch (action.type) {
        case FECTH_COMPANY_LIST_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FECTH_COMPANY_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload
            }
        case FECTH_COMPANY_LIST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
            }
            default: // need this for default case
            return state 
    }
}