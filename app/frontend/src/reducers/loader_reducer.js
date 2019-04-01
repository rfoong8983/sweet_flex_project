import { TOGGLE_LOADER } from '../actions/loader_actions';

const loaderReducer = (oldState = false, action) => {
    Object.freeze(oldState);

    switch(action.type) {
        case TOGGLE_LOADER:
            return action.active;
        default: 
            return oldState;
    }
};

export default loaderReducer;