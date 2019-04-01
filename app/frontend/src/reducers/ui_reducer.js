import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import loaderReducer from './loader_reducer';

export default combineReducers({
    modal: modalReducer,
    loader: loaderReducer
});