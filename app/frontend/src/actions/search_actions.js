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

export const receiveTwitterData = (twitterData, timer) => ({
  type: RECEIVE_TWITTER_DATA,
  twitterData: {twitterData, timer},
});

export const receiveWatsonData = (watsonData, timer) => ({
  type: RECEIVE_WATSON_DATA,
  watsonData: {watsonData, timer}
});

export const saveSearchData = searchData => dispatch => (
  SearchAPIUtil.saveSearch(searchData)
      .then(searchData => dispatch(receiveSearchData(searchData)))
);

export const fetchTwitterData = searchData => dispatch => {
  let timer = performance.now();
  return TwitterAPIUtil.fetchTwitterData(searchData)
    .then(twitterData => {

      // timing Twitter API call
      console.log('Twitter API call took: ' + `${(performance.now() - timer).toFixed(2)} ` + 'ms.');
      timer = performance.now();
      //

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

      // timing parsing tweets through Sentiment and returning main object
      console.log('Running Sentiment took: ' + `${(performance.now() - timer).toFixed(2)}` + 'ms');
      timer = performance.now();
      //

      return dispatch(receiveTwitterData(twitterData, timer));
    })
};
// export const fetchTwitterData = searchData => dispatch => (
//   TwitterAPIUtil.fetchTwitterData(searchData)
//     .then(twitterData => {
//       twitterData.data.allTweets = twitterData.data.allTweets.map(tweet => {
//         const score = s.analyze(tweet.fullText);
//         return {
//           fullText: tweet.fullText,
//           location: tweet.location,
//           screenName: tweet.screenName,
//           tweetTime: tweet.tweetTime,
//           userName: tweet.userName,
//           score: score.score,
//           comparative: score.comparative,
//           tokens: score.tokens,
//           words: score.words,
//           positive: score.positive,
//           negative: score.negative
//         };
//       });
      
//       return dispatch(receiveTwitterData(twitterData));
//     })
// );

export const fetchWatsonData = (text, timer) => dispatch => (
  WatsonAPIUtil.fetchWatsonData(text)
    .then(watsonData => {
      let execTime = performance.now() - timer;
      console.log('Watson API call took: ' + (execTime >= 1000 ? `${(execTime/1000).toFixed(2)}` + 's.': `${(execTime).toFixed(2)}` + 'ms.'));
      execTime = performance.now();
      
      return dispatch(receiveWatsonData(watsonData, execTime));
    })
);

export const receiveSearch = searchData => dispatch => {
  localStorage.lastSearch = searchData;
  SearchAPIUtil.saveSearch(searchData)
    .then(searchData => dispatch(receiveSearchData(searchData)))
    .then(() => dispatch(fetchTwitterData(searchData)))
    .then(res => {
      let timer = performance.now();
      let tweets = res.twitterData.twitterData.data.allTweets;
      // let tweets = res.twitterData.data.allTweets;
      localStorage.tweets = JSON.stringify(tweets);
      dispatch(fetchWatsonData(res.twitterData.twitterData.data.allText, timer))
      // dispatch(fetchWatsonData(res.twitterData.data.allText))
      .then(() => {
        return dispatch(toggleLoader(false));
      }); // leave this promise call here to run AFTER watson data retrieved
      }
    );
};
