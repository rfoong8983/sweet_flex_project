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

    const newSentiment = new Sentiment({
        user_id: req.body.currentUserId,
        hashtag: req.body.hashtag,
        tones: req.body.tones
    });

    return newSentiment.save()
        .then(sentiment => {return res.json(sentiment)})
        .catch(err => console.log(err));
});

module.exports = router;