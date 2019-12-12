import {
    FETCH_SEARCHED_COMPANY_LIST_BEGIN,
    FETCH_SEARCHED_COMPANY_LIST_SUCCESS,
    FETCH_SEARCHED_COMPANY_LIST_FAILURE
} from '../actions/SearchActions';

const initialState = {
    items: {

    },
    loading: false,
    error: null
};

export default function searchReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_SEARCHED_COMPANY_LIST_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_SEARCHED_COMPANY_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload
            }
        case FETCH_SEARCHED_COMPANY_LIST_FAILURE:
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