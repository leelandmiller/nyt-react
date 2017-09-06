let Save = require('../models/Save');

module.exports = {
    index: function(req, res) {
        Save.find().then(saves => {
            res.json(saves)
        }).catch(err => res.json(err));
    },
    create: function(req, res) {
        console.log(req.body);
        let save = req.body.article;

        Save.create({
            'headline': save.headline,
            'snippet': save.snippet,
            'url': save.web_url,
            'pubDate': save.pub_date,
            'image': save.multimedia[0].url,
            'byline': save.byline.original,
            // '_id': article._id
        }, function(err, newDoc) {
            console.log('inside promise mongoose')
            res.json(newDoc);
        });
    },
    // update: function(req, res) {
    //
    // },
    // destroy: function(req, res) {
    //
    // }
};
