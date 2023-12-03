const mongoose = require('mongoose');
const { Schema, model, Types } = mongoose;

const CommentSchema = new Schema({
    description: {
        type: String,
        require: true
    },
    author: {
       type: Types.ObjectId,
       ref: 'User' 
    },
    post: {
        type: Types.ObjectId,
        ref: 'Post' 
     },
});

const Comment = model('Comment', CommentSchema);

module.exports = Comment;