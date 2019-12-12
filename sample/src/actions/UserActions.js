import {LOGIN_SUCCESS,LOGIN_FAILURE} from "./ActionTypes";
import {loginUser, registerUser} from "../services/usersService";


export const LoginAction =(obj)=> {
    return (dispatch) => {
        return loginUser(obj).then( res => {
                if (res.data.statusCode == 1) {
                    localStorage.setItem('accessToken', res.data.responseData.accessToken);
                    dispatch({type: LOGIN_SUCCESS, payload:res.data.responseData});
                    return "Success";
                }else {
                    dispatch({type: LOGIN_FAILURE, payload: 'false'});
                    return res;
                }
            }).catch(e => {
            dispatch({type: LOGIN_FAILURE, payload: 'false'});
            return "failed";
        })
    };
}


export const SignupAction =(obj)=> {
    return (dispatch) => {
        return registerUser(obj).then( res => {

            if (res.data.statusCode == 1) {
                //localStorage.setItem('accessToken', res.data.responseData.accessToken);
                dispatch({type: LOGIN_SUCCESS, payload:res.data.responseData});
                return "Success";
            }else {
                dispatch({type: LOGIN_FAILURE, payload: 'false'});
                return res;
            }
        }).catch(e => {
            dispatch({type: LOGIN_FAILURE, payload: 'false'});
            return "failed";
        })
    };
}

export const SocialAction=(obj)=>{
    return (dispatch) => {
        return registerUser(obj).then( res => {
                if (res.data.statusCode == 1) {
                    localStorage.setItem('accessToken', res.data.responseData.accessToken);
                    dispatch({type: LOGIN_SUCCESS, payload:res.data.responseData});
                    return "Success";
                }else {
                    dispatch({type: LOGIN_FAILURE, payload: 'false'});
                    return res;
                }
            }).catch(e => {
            dispatch({type: LOGIN_FAILURE, payload: 'false'});
            return "failed";
        })
    };
}

