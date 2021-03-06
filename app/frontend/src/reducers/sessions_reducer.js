import { 
    RECEIVE_CURRENT_USER,
    RECEIVE_USER_LOGOUT
} from '../actions/session_actions';

const initialState = {
    isAuthenticated: false,
    currentUser: {}
};

const sessionsReducer = (oldState=initialState, action) => {
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
            return ( 
                {
                    ...oldState
                }

                //     REMOVING second two keys --
                //     ON DEFAULT (aka other actions),
                //     action.currentUser will be undefined

                // {
                //     ...oldState,
                //     isAuthenticated: !!action.currentUser,
                //     currentUser: action.currentUser
                // }
            );
    }
};

export default sessionsReducer;