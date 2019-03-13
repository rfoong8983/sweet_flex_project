const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
const keys = require('../config/keys');

export const toneAnalyzeText = text => {
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
        }
    });
  });
};