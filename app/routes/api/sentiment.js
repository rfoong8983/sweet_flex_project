const express = require('express');
const router = express.Router();
const Sentiment = require("../../models/Sentiment")
// todo: const validateSentimentInput = require('../../validation/sentiment');

const CATEGORIES = ['anger', 'fear', 'joy', 'sadness', 'analytical', 'confident', 'tenative']
const mapTonesToArr = (tones) => {
    //expects tones = {fear: 0.5, anger: 0.7, sadness: 0.9}
    //takes in a js object and turns into array to store in DB
    mappedArr = CATEGORIES.map((cat) => tones[cat])
    mappedArr.forEach((cat,idx) => { 
        if (mappedArr[idx] === undefined) mappedArr[idx] = 0
    });
    return mappedArr;
}
router.get("/test", (req, res) => res.json({ msg: "This is the sentiment route" }));

router.post('/', (req, res) =>   {
    // const { errors, isValid } = validateSentimentInput(req.body) 
    // if (!isValid) return res.status(400).json(errors);

    tones = mapTonesToArr(req.body.tones[0])
    // 
    // console.log(req.body.currentUserId)
    const newSentiment = new Sentiment({
        user_id: req.body.user_id,
        hashtag: req.body.hashtag,
        tones
    });
    
    newSentiment.save()
        .then(sentiment => {return res.json(sentiment)})
        .catch(err => console.log(err));
});
router.get('/', (req, res) => {
    Sentiment.find({}).then(Sentiments => {
        return res.json(Sentiments);
    })

})

router.get('/user/:user_id', (req, res) => {
    Sentiment.find({user_id: req.params.user_id})
        .then(senti => res.json(senti))
        .catch(err =>
            res.status(404).json({ nosentifound: 'No sentiments found from that user' }
        )
    );
});

module.exports = router;