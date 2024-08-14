const mongoose = require("mongoose");

console.log(process.env.MONGODB_URI)

exports.connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("MongoDB connection established...")
    } catch (error) {
        console.error(error.message)
    }
}