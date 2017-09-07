let Save = require('../models/Save');

module.exports = {
    index: function(req, res) {
        Save.find().then(saves => {
            res.json(saves)
        }).catch(err => res.json(err));
    },
    create: function(req, res) {
        let save = req.body.article;
        let image = '';

        if (save.multimedia.length > 0) {
            image = save.multimedia[1].url;
        }

        Save.create({
            'headline': save.headline.main,
            'snippet': save.snippet,
            'url': save.web_url,
            'pubDate': save.pub_date,
            'image': image,
            'byline': save.byline.original,
            '_id': save._id
        }).then(newDoc => {
            res.json(newDoc);
        });
    },
    destroy: function(req, res) {
        Save.findOneAndRemove({'_id': req.params.articleId}).then(removed => res.json(removed)).catch(err => console.log(err));
    }
};
