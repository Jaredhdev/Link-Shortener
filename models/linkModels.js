const mongoose = require("mongoose");


const linkSchema = mongoose.Schema({
    originalUrl: { type: String, required: true },
    slug: { type: String, required: true, unique: true }
})

const Link = mongoose.model('Link', linkSchema);

module.exports = Link;
