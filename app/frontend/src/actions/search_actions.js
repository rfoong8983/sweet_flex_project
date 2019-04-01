import * as SearchAPIUtil from '../util/search_api_util';
import * as WatsonAPIUtil from '../util/watson_api_util';
import * as TwitterAPIUtil from '../util/twitter_api_util';
import { toggleLoader } from './loader_actions';

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
);

export const fetchTwitterData = searchData => dispatch => (
  TwitterAPIUtil.fetchTwitterData(searchData)
    .then(twitterData => dispatch(receiveTwitterData(twitterData)))
);

export const fetchWatsonData = text => dispatch => (
  WatsonAPIUtil.fetchWatsonData(text)
    .then(watsonData => dispatch(receiveWatsonData(watsonData)))
);

export const receiveSearch = searchData => dispatch => {
  SearchAPIUtil.saveSearch(searchData)
    .then(searchData => dispatch(receiveSearchData(searchData)))
    .then(() => dispatch(fetchTwitterData(searchData)))
    .then(res => dispatch(fetchWatsonData(res.twitterData.data.allText)))
    .then(() => dispatch(toggleLoader(false)));
};
