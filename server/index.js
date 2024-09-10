require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./src/database.js");
const UrlModel = require("./src/models/url.js");

const port = process.env.port || 3000;

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("OK")
});

app.post("/", async (req, res) => {
    const {url} = req.body;

   

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