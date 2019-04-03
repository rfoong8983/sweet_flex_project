import { RECEIVE_TWITTER_DATA } from '../actions/search_actions';

const sentimentReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch(action.type) {
        case RECEIVE_TWITTER_DATA:
            return action.twitterData.twitterData.data.allTweets.map((el, idx) => {
                if (idx === action.twitterData.twitterData.data.allTweets.length - 1) {
                    console.log('Updating frontend state took: ' + `${(performance.now() - action.twitterData.timer).toFixed(2)}` + 'ms.');
                }

                return {
                    tweetId: idx,
                    score: el.score,
                    comparative: el.comparative,
                    tokens: el.tokens,
                    words: el.words,
                    positive: el.positive,
                    negative: el.negative
                };
            });
        default:
            return oldState;
    }
};

export default sentimentReducer;