require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const connectDB = require("./src/database.js");
const UrlModel = require("./src/models/url.js");
const validateUrl = require("./src/helpers/validateUrl");

const app = express();
const port = process.env.port || 3000;

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.get("/api/shorturl/:url", async (req, res, next) => {
    //Handler to redirect url to shortened URL
    const {url} = req.params;

    try {
        const urlMatch = await UrlModel.find({shortenedUrl: url});
        if(!urlMatch.length) {
            let err = new Error("URL not found");
            err.status = 404;
            next(err);
        } else {
            res.status(301).redirect(urlMatch[0].url);
        }

    } catch(err) {
        next(err);
    }
});

app.post("/api/shorturl", async (req, res, next) => {
    //Handler to create new short URL based on valid url
    let {url} = req.body;
    try {

        const isValid = await validateUrl(url);

        const shortenedUrl = await UrlModel.createShortUrl();
        const urlInst = new UrlModel({
            url, shortenedUrl: `${shortenedUrl}`
        });
        let doc = await urlInst.save();
        res.json(doc);
    } catch(err) {
        if(!err.status) err.status = 400;
        next(err);
    }
})

app.use((err, req, res, next) => {
    //Custom Error Handler
    console.error(err.message);
    res.status(err.status ? err.status : 500).json({message: err.message});
  })


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})