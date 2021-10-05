const mongoose = require('mongoose');

//creating the schema in mongodb
const VideoSchema = mongoose.Schema({
    description: String,
    sources: [String],
    subtitle: String,
    thumb: String,
    title: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Video',VideoSchema);