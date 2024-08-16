const mongoose = require("mongoose");
const {Schema} = require("mongoose");


const userSchema = new mongoose.Schema({
    username: { type: String, required: true},
    password: { type: String, required: true},
    links: [{ type: Schema.Types.ObjectId, ref: "Link" }]
})

const User = mongoose.model('User', userSchema);

module.exports = User;

