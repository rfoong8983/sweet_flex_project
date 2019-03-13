const express = require('express');
const router = express.Router();
const Search = require('../../models/Search');
const validateSearchInput = require('../../validation/search');
const Twit = require('twit');
const keys = require('../../config/keys');

router.post('/', (req, res) => {
  const { errors, isValid } = validateSearchInput(req.body) 
  if (!isValid) return res.status(400).json(errors);
  
  const newSearch = new Search({
      user: 'TEST',
      query: req.body.searchInput,
     });

  return newSearch.save()
                  .then(search => {return res.json(search)})
                  .catch(err => console.log(err));
});

router.get('/', (req, res) => {
  // const { errors, isValid } = validateSearchInput(req.body) 
  // if (!isValid) return res.status(400).json(errors);
  let hashtag = req.body.searchInput;

  const T = new Twit({
    consumer_key:         keys.twitterConsumerKey,
    consumer_secret:      keys.twitterConsumerSecret,
    access_token:         keys.twitterAccessToken,
    access_token_secret:  keys.twitterAccessTokenSecret,
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL:            true,     // optional - requires SSL certificates to be valid.
  });

  aggregateData = "";

  T.get('search/tweets', 
        { q: `${hashtag}`,
          count: 100,
          lang: 'en',
          tweet_mode: 'extended',
          result_type: 'mixed' }, 
        (err, data, response) => { 
          // debugger;
          data.statuses.forEach(status => { aggregateData += status.full_text });
          res.send(aggregateData.replace(/\s+/g," ")) }); 
});
module.exports = router;