const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connection: ${connection.connection.host}`)
    } catch(err) {
        console.error(err.message);
    }
}

module.exports = connectDB;