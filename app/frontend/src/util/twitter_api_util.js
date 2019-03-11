// npm install twit
const Twit = require('twit');
const keys = require('../../../config/keys');


export const queryTweetsHashtag = hashtag => {
  const T = new Twit({
    consumer_key:         keys.twitterConsumerKey,
    consumer_secret:      keys.twitterConsumerSecret,
    access_token:         keys.twitterAccessToken,
    access_token_secret:  keys.twitterAccessTokenSecret,
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL:            true,     // optional - requires SSL certificates to be valid.
  });

  T.get('search/tweets', 
        { q: `${hashtag}`,
          count: 100,
          lang: 'en',
          result_type: 'popular' }, 
        (err, data, response) => console.log(data) );
}
