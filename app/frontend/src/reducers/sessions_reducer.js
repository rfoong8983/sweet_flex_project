import { 
    RECEIVE_CURRENT_USER,
    RECEIVE_USER_LOGOUT
} from '../actions/session_actions';

const initialState = {
    isAuthenticated: false,
    user: {}
};

const sessionsReducer = (oldState=initialState, action) => {
    console.log("in session reducer", action)
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return {
                ...oldState,
                isAuthenticated: !!action.currentUser,
                currentUser: action.currentUser
            };
        case RECEIVE_USER_LOGOUT:
            return {
                isAuthenticated: false,
                currentUser: undefined
            };
        default:
            return oldState;
    }
};

export default sessionsReducer;