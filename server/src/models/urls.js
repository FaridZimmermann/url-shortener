const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    createdAt: Date,
    updatedAt: Date
});

const urlSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    shortenedUrl: {
        type: String,
        required: true
    }
})