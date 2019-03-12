import * as SearchAPIUtil from '../../src/util/search_api_util';
import * as WatsonAPIUtil from '../../src/util/watson_api_util';
import * as TwitterAPIUtil from '../../src/util/twitter_api_util';

export const RECEIVE_SEARCH_DATA = "RECEIVE_SEARCH_DATA";
export const RECEIVE_WATSON_DATA = "RECEIVE_WATSON_DATA";
export const RECEIVE_TWITTER_DATA = "RECEIVE_TWITTER_DATA";

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
)

export const fetchWatsonData = text => dispatch => (
  WatsonAPIUtil.toneAnalyzeText(text)
               .then(watsonData => dispatch(receiveWatsonData(watsonData)))
);

// export const receiveSearch = searchData => dispatch => (
//   saveSearchData(searchData)
//     .then((searchData.query) => dispatch())
// );


// searchData.data.query after the saveSearch