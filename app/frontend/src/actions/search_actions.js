import * as SearchAPIUtil from '../util/search_api_util';
import * as WatsonAPIUtil from '../util/watson_api_util';
import * as TwitterAPIUtil from '../util/twitter_api_util';
import { toggleLoader } from './loader_actions';
import Sentiment from 'sentiment';

export const RECEIVE_SEARCH_DATA = "RECEIVE_SEARCH_DATA";
export const RECEIVE_WATSON_DATA = "RECEIVE_WATSON_DATA";
export const RECEIVE_TWITTER_DATA = "RECEIVE_TWITTER_DATA";
export const RECEIVE_LAST_SEARCH = "RECEIVE_LAST_SEARCH";

const s = new Sentiment();

export const receiveSearchData = searchData => ({
  type: RECEIVE_SEARCH_DATA,
  searchData,
});

export const receiveTwitterData = twitterData => ({
  type: RECEIVE_TWITTER_DATA,
  twitterData,
});

export const receiveWatsonData = watsonData => ({
  type: RECEIVE_WATSON_DATA,
  watsonData,
});

export const saveSearchData = searchData => dispatch => (
  SearchAPIUtil.saveSearch(searchData)
      .then(searchData => dispatch(receiveSearchData(searchData)))
);

export const fetchTwitterData = searchData => dispatch => (
  TwitterAPIUtil.fetchTwitterData(searchData)
    .then(twitterData => {
      twitterData.data.allTweets = twitterData.data.allTweets.map(tweet => {
        const score = s.analyze(tweet.fullText);
        return {
          fullText: tweet.fullText,
          location: tweet.location,
          screenName: tweet.screenName,
          tweetTime: tweet.tweetTime,
          userName: tweet.userName,
          score: score.score,
          comparative: score.comparative,
          tokens: score.tokens,
          words: score.words,
          positive: score.positive,
          negative: score.negative
        };
      });
      
      return dispatch(receiveTwitterData(twitterData));
    })
);

export const fetchWatsonData = text => dispatch => (
  WatsonAPIUtil.fetchWatsonData(text)
    .then(watsonData => dispatch(receiveWatsonData(watsonData)))
);

export const receiveSearch = searchData => dispatch => {
  SearchAPIUtil.saveSearch(searchData)
    .then(searchData => dispatch(receiveSearchData(searchData)))
    .then(() => dispatch(fetchTwitterData(searchData)))
    .then(res => {
      let tweets = res.twitterData.data.allTweets;
      localStorage.tweets = JSON.stringify(tweets);
      dispatch(fetchWatsonData(res.twitterData.data.allText))
      .then(() => {
        return dispatch(toggleLoader(false));
      }); // leave this promise call here to run AFTER watson data retrieved
      }
    );
};
