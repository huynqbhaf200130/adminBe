const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        trim:true,
    },
    username: {
        type: String,
        trim:true,
    },
    email: {
        type: String,
        trim:true,
    },
    dob: {
        type: String,
    },
    gender: {
        type: String,
    },
    address: {
        type: String
    },
    type:{
        type: String,
        default:"normal"
    },
    role: {
        type: String
    },
    password: {
        type: String
    },
    phone: {
        type: String
    }
});

const User = mongoose.model('User', userSchema);


module.exports = User;