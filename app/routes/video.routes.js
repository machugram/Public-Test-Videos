module.exports = (app)  =>
{
    const videoModel = require('../controllers/video.controller');
    app.get('/videos',videoModel.getVideos)

}