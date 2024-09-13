require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const connectDB = require("./src/database.js");
const UrlModel = require("./src/models/url.js");

const app = express();
const port = process.env.port || 3000;

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.post("/api/shorturl", async (req, res) => {
    const {url} = req.body;
    console.log("runs")
    try {

        const shortenedUrl = await UrlModel.createShortUrl();
        console.log(shortenedUrl);
        const urlInst = new UrlModel({
            url, shortenedUrl: `${shortenedUrl}`
        });
        let doc = await urlInst.save();
        res.json(doc);
    } catch(err) {
        console.error(err);
    }
})




app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})