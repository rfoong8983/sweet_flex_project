const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const SentimentSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: [true, 'user_id not found']
    }, 
    hashtag: {
        type: String, 
        required: [true, 'hashtag field is required']
    },
    date: {
        type: Date,
        default: Date.now
    },
    tones: [{
        type: Number,
        default: 0
    }]
})

module.exports = Sentiment = mongoose.model('sentiments', SentimentSchema);
