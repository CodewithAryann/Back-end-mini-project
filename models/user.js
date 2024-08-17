const mongosse = require("mongoose");

mongosse.connect("mongodb://127.0.01:27017/mini-backend-project");

const Schema = mongosse.Schema ({
    username: String,
    name: String,
    email: String,
    password: String,
    age: Number
})

module.exports = mongosse.model("user", Schema)