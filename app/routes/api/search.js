const express = require('express');
const router = express.Router();
const Search = require('../../models/Search');
const validateSearchInput = require('../../validation/search');
const Twit = require('twit');
const keys = require('../../config/keys');
const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

router.post('/', (req, res) => {
  const { errors, isValid } = validateSearchInput(req.body.searchInput);
  if (!isValid) return res.status(400).json(errors);
  
  const newSearch = new Search({
      user: 'TEST',
      query: req.body.searchInput,
     });

  return newSearch.save()
                  .then(search => {return res.json(search)})
                  .catch(err => console.log(err));
});

router.post('/twitter', (req, res) => {
  // const { errors, isValid } = validateSearchInput(req.body) 
  // if (!isValid) return res.status(400).json(errors);
  let hashtag = req.body.searchData;

  const T = new Twit({
    consumer_key:         keys.twitterConsumerKey,
    consumer_secret:      keys.twitterConsumerSecret,
    access_token:         keys.twitterAccessToken,
    access_token_secret:  keys.twitterAccessTokenSecret,
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL:            true,     // optional - requires SSL certificates to be valid.
  });

  allText = "";
  allTweets = []; 
  T.get('search/tweets', 
        { q: `${hashtag}`,
          count: 100,
          lang: 'en',
          tweet_mode: 'extended',
          result_type: 'mixed' }, 
        (err, data, response) => { 
          data.statuses.forEach(status => { 
            allTweets.push({
              fullText: status.full_text.replace(/\n/g, " "),
              screenName: status.user.screen_name,
              userName: status.user.name
            });

            allText += status.full_text; 
          });
          res.send({
            allTweets: allTweets,
            allText: allText.replace(/\s+/g," ")
          });
  });
});

router.post('/watson', (req, res) => {
  const text = req.body.text;
  const toneAnalyzer = new ToneAnalyzerV3({
    version_date: "2017-09-21",
    iam_apikey: keys.watsonAPIKey,
    url: "https://gateway.watsonplatform.net/tone-analyzer/api"
  });

  let toneParams = {
    tone_input: text,
    content_type: "text/plain",
    sentences: true,
    tones: ["emotion", "social"]
  };
  
  return new Promise((resolve, reject) => {
    toneAnalyzer.tone(toneParams, function (error, toneAnalysis) {
        if (error) {
            reject(Error(error));
        } else {
            resolve(toneAnalysis);
            res.send(toneAnalysis);
        }
    });
  });
});

module.exports = router;