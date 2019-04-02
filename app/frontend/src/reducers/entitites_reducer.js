import { combineReducers } from 'redux';
import tweetsReducer from './tweets_reducer';
import watsonReducer from './watson_reducer';
import sentimentReducer from './sentiment_reducer';

const entitiesReducer = combineReducers({
    tweets: tweetsReducer,
    watson: watsonReducer,
    sentiment: sentimentReducer
});

export default entitiesReducer;
