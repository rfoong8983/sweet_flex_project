import * as APIUtil from '../util/session_api_util';
import jwt_decode from 'jwt-decode';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";

// const { something } = this.props
// => const something = this.props.something

// const anything = "hi"
// { anything }
// => { anything: "hi" }

// reg action creators below
export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const receiveUserSignIn = currentUser => ({
    type: RECEIVE_USER_SIGN_IN
});

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const logoutUser = () => ({
    type: RECEIVE_USER_LOGOUT
});


// thunk action creators below
// -- add returns to chain promises outside of actions file
export const signup = user => dispatch => (
    APIUtil.signup(user)
        .then((res) => {
            const { token } = res.data;
            localStorage.setItem('jwtToken', token);
            APIUtil.setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(receiveCurrentUser(decoded));
        })
        .catch((err) => {
            dispatch(receiveErrors(err));
        })
);

export const login = user => dispatch => {
    return APIUtil.login(user)
        .then((res) => {
            const { token } = res.data;
            localStorage.setItem('jwtToken', token);
            APIUtil.setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(receiveCurrentUser(decoded));
        })
        .catch((err) => {
            dispatch(receiveErrors(err.response.data));
        })
};

export const logout = () => dispatch => {
    localStorage.removeItem('jwtToken');
    APIUtil.setAuthToken(false);
    dispatch(logoutUser());
};