const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let saveSchema = new Schema({
    'headline': String,
    'snippet': String,
    'url': String,
    'pubDate': Date,
    'image': {
        'type': String,
        default: ''
    },
    'byline': String,
    'insertDate': {
        type: Date,
        default: Date.now
    }
});

let Save = mongoose.model('Save', saveSchema);

module.exports = Save;
