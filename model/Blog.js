const mongoose = require('mongoose');

const BlogCreate = new mongoose.Schema({
    thumbnailUrl: {
        type: String,
        required: [true, 'disciption is required']
    },
    title: {
        type: String,
        required: [true, 'disciption is required']
    },
    id: {
        type: String,
        required: [true, 'disciption is required']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }


});

const SendData = mongoose.model('createBlog', BlogCreate);
module.exports = SendData;
