const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const CommentSchema = new Schema({
    description: {
        type: String,
        require: true
    },
    author: {
        type: String
    }    
});

const Post = model('Comment', CommentSchema);

module.exports = Post;