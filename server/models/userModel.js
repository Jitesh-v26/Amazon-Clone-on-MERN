const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    otp: {
        type: Number,
    },
    otpExpiry: {
        type: Date
    }
})

const userModel = mongoose.model("users", userSchema);

module.export = userModel;