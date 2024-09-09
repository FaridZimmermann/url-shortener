require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./src/database.js");

const port = process.env.port || 3000;

connectDB();

app.get("/", (req, res) => {
    res.send("OK")
})




app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})