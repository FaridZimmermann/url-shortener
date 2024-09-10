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

//static method to find last Url and create shortened Url for current document
urlSchema.statics.createShortUrl = function() {
    return new Promise(async (resolve, reject) => {
        try {
            const doc = await this.find().sort({field: "asc", _id: -1}).limit(1);
            console.log(doc);
            let shortUrl;

            if(!doc.length) {
                shortUrl = 0;
            } else {
                shortUrl = parseInt(doc[0].shortenedUrl);
            }
            resolve(shortUrl + 1);
        } catch(err) {
            reject(err);
        }

    })
}


module.exports = mongoose.model("Url", urlSchema);