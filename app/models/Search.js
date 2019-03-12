const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SearchSchema = new Schema({
    user: {
        type: String,
        ref: 'users',
        required: true
    }, 
    query: {
        type: String, 
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Search = mongoose.model('searches', SearchSchema);