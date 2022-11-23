const mongoose = require("mongoose")
const Schema = mongoose.Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    }
})

const Model = new mongoose.model("User",Schema)
module.exports = Model