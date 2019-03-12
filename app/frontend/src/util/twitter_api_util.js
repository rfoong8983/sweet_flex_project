// npm install twit
// import axios from 'axios';
const Twit = require('twit');
const keys = require('../../src/config/keys');
const axios = require('axios');

module.exports = function queryTweetsHashtag(hashtag) {
  debugger;
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
        (err, data, response) => { 
          debugger;
          console.log(data)
          return (data) });
}

module.exports = function fetchTwitterData(searchData) {
  return axios.get('/api/search', searchData);
}
