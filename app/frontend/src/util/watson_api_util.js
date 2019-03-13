const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
// const keys = require('../../../config/keys');
const keys = require('../config/keys');


export const toneAnalyzeText = text => {
  const toneAnalyzer = new ToneAnalyzerV3({
    version_date: "2017-09-21",
    iam_apikey: keys.watsonAPIKey,
    url: "https://gateway.watsonplatform.net/tone-analyzer/api"
  });

  let toneParams = {
    tone_input: text,
    content_type: "text/json",
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
// "In my younger and more vulnerable years my father gaveme some advice that I’ve been turning over in my mindever since.‘Whenever you feel like criticizing any one,’ he told me,‘just remember that all the people in this world haven’t hadthe advantages that you’ve had.’He didn’t say any more but we’ve always been unusuallycommunicative in a reserved way, and I understood that hemeant a great deal more than that. In consequence I’m inclined to reserve all judgments, a habit that has opened upmany curious natures to me and also made me the victimof not a few veteran bores. The abnormal mind is quick todetect and attach itself to this quality when it appears in anormal person, and so it came about that in college I wasunjustly accused of being a politician, because I was privyto the secret griefs of wild, unknown men. Most of the confidences were unsought—frequently I have feigned sleep,preoccupation, or a hostile levity when I realized by someunmistakable sign that an intimate revelation was quivering on the horizon—for the intimate revelations of youngmen or at least the terms in which they express them areusually plagiaristic and marred by obvious suppressions.Reserving judgments is a matter of infinite hope. I am stilla little afraid of missing something if I forget that, as my father snobbishly suggested, and I snobbishly repeat a senseof the fundamental decencies is parcelled out unequally a birth "