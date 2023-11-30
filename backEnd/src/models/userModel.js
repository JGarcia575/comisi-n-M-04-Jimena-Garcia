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
    }    
});

const User = model('User', UserSchema);

module.exports = User;