const mongoose = require("mongoose");
const {Schema} = require("mongoose");


const linkSchema = mongoose.Schema({
    originalUrl: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    user: { type: Schema.Types.ObjectId, ref: 'User' , required: true}
})

const Link = mongoose.model('Link', linkSchema);

module.exports = Link;
