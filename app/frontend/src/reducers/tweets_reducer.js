import { RECEIVE_TWITTER_DATA } from '../actions/search_actions';

const tweetsReducer = (oldState={}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch(action.type) {
    case RECEIVE_TWITTER_DATA:
      newState.allTweets = action.twitterData.data.allTweets.map((el, idx) => {
        return {
          id: idx,
          fullText: el.fullText,
          location: el.location,
          screenName: el.screenName,
          tweetTime: el.tweetTime,
          userName: el.userName
        };
      });
      return newState;
    default:
      return oldState;
  }
};

export default tweetsReducer;