module.exports = (app)  =>
{
    const videoModel = require('../controllers/video.controller');

    //creating a new video

    app.post('/video', videoModel.createVideo);
    app.get('/videos',videoModel.getVideos)

}