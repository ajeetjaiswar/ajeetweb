import {LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT} from "../actions/ActionTypes";

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                initialState,
                loggedIn: true,
                user: action.payload
            };
        case LOGIN_FAILURE:
            return {};
        case LOGOUT:
            return {};
        default:
            return state
    }
}
