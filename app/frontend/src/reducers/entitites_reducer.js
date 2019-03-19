import { combineReducers } from 'redux';
import tweetsReducer from './tweets_reducer';
import watsonReducer from './watson_reducer';

const entitiesReducer = combineReducers({
    tweets: tweetsReducer,
    watson: watsonReducer,
});

export default entitiesReducer;