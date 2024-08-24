const mongoose = require("mongoose");
const debug = require("debug")("development : monogoose");
const config

mongoose.connect("/mini-backend-project").then(function(){
    debug("Connected to MongoDB");
})
.catch(function(err){
    debug(err);
})

module.exports = mongoose.connection;