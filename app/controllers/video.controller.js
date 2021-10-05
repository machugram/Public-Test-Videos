const publicVideo = require('../models/video.model');

exports.createVideo = function(req, res) {
    var video = new publicVideo(req.body);
    video.save(function(err, video) {
      if (err)
        res.send(err);
      res.json(video);
    });
}


    exports.getVideos = (req,res) => {
        publicVideo.find()
        .then(result  => {
            res.send(result);
        })
        .catch(err => {
            console.log('err',err);
            res.send(err);
        })
    }