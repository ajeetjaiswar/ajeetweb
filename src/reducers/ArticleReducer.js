import {
    FECTH_POWER_READS_BEGIN,
    FECTH_POWER_READS_SUCCESS,
    FECTH_POWER_READS_FAILURE
} from '../actions/ArticlesAction';

const initialState = {
    items: {
  
    },
    loading: false,
    error: null
  };

export default function articleReducer(state = initialState, action) {
    switch (action.type) {
        case FECTH_POWER_READS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FECTH_POWER_READS_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload
            }
        case FECTH_POWER_READS_FAILURE:
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