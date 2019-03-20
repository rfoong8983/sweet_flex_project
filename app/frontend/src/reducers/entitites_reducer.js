import { combineReducers } from 'redux';
import tweetsReducer from './tweets_reducer';
import watsonReducer from './watson_reducer';

const entitiesReducer = combineReducers({
    tweets: tweetsReducer,
    watson: watsonReducer,
});

export default entitiesReducer;

let sentenceTones = {Joy: 46.983465, Analytical: 9.013230000000002, Confident: 4.094874, Tentative: 5.408725, Sadness: 0.520538}

let tones = Object.keys(sentenceTones);
let toneData = [];
for (let i = 0; i < tones; i++) {

}