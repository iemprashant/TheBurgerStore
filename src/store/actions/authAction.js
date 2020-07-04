import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type:actionTypes.AUTH_START
    };
}

export const authSuccess= (idToken,userId) => {
    return {
        type:actionTypes.AUTH_SUCCESS,
        idToken:idToken,
        userId:userId
    };
}

export const authFail= (error) => {
    return {
        type:actionTypes.AUTH_FAIL,
        error:error
    };
}
export const authLogout = () => {
    return {
        type:actionTypes.AUTH_LOGOUT
    };
}
export const checkAuthTimeout=(expirationTime)=>{
    return dispatch=>{
         setTimeout(() => {
             dispatch(authLogout());
         },expirationTime*1000);
    }
}
export const auth = (email,password,isSignup) => {
    return dispatch=>{
        dispatch(authStart());
        const authData={
            email:email,
            password:password,
            returnSecureToken:true
        }
        let url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAhvtfib48nbdboM_zlaE9hTvhVoNl-M0U';
        if(!isSignup){
            url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAhvtfib48nbdboM_zlaE9hTvhVoNl-M0U';
        }
        axios.post(url,authData)
        .then( response=>{
                console.log(response.data);
                dispatch(authSuccess(response.data.idToken,response.data.userId));
                dispatch(checkAuthTimeout(response.data.expiresIn));
            }
        )
        .catch(error=>{
            dispatch(authFail(error.response.data.error))
        })
    };
};

export const setAuthRedirectPath=(path)=>{
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path:path
    }
}