import { combineReducers } from 'redux';
import tweetsReducer from './tweets_reducer';

const entitiesReducer = combineReducers({
    tweets: tweetsReducer,
});

export default entitiesReducer;