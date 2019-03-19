import { RECEIVE_TWITTER_DATA } from '../actions/search_actions';

const tweetsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch(action.type) {
    case RECEIVE_TWITTER_DATA:
      newState.allTweets = action.twitterData.data.allTweets;
      return newState;
    default:
      return oldState;
  }
}

export default tweetsReducer;