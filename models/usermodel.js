const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    FUllname: String,
    email: String,
    password: String,
    cart : {
        type: Array,
        default: []
    },
    order : {
        type: Array,
        default: []
    },
    contact : Number,
    picture: String
}) 

module.exports = mongoose.model("user", userSchema);