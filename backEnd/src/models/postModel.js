const mongoose = require('mongoose');
const { Schema, model, Types } = mongoose;

const PostSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    description: { 
        type: String,
        require: true
    },

    author: {
        type: String
    },
    /*
    author: {
        type: Types.ObjectId,
        ref: 'User' 
    } */
});

const Post = model('Post', PostSchema);

module.exports = Post;