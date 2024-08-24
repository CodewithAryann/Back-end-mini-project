const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27.017/Back-end-mini-project");

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
    isAdmin : Boolean,
    contact : Number,
    picture: String
}) 

module.exports = mongoose.model("user", userSchema);