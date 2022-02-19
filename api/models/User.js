const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
    profilePic:{
        type: String,
        default:"https://www.pngkit.com/png/detail/25-258694_cool-avatar-transparent-image-cool-boy-avatar.png"
    }
},{timestamps: true});

module.exports = mongoose.model('User', UserSchema);