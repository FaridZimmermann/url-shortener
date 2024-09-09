const mongoose = require("mongoose");


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