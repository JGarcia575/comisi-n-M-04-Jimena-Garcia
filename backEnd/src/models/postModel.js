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

    imagenURL: {
        type: String,
        default: 'https://i.pinimg.com/originals/af/0b/c9/af0bc9e49387570a8e91699c45684db4.jpg'
    },        
    author: {
        type: Types.ObjectId,
        ref: 'User' 
    },
    comments: [ {
        type: Types.ObjectId,
        ref: 'Comment'
    } ]
}, {
    timestamps: true
});

const Post = model('Post', PostSchema);

module.exports = Post;