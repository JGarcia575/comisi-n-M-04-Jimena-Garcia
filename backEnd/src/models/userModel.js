const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const UserSchema = new Schema({
    userName: {
        type: String,
        unique: true,
        require: true,
        minLength: 3,
        maxLength: 25,
        
    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        unique: true,
        require: true,
        minLength: 8         
    },
    avatarURL: {
        type: String,
        default: "https://static.vecteezy.com/system/resources/previews/023/181/742/non_2x/fantasy-cat-with-wings-on-black-background-digital-art-painting-ai-generative-image-free-photo.jpg"
    }    
});

const User = model('User', UserSchema);

module.exports = User;