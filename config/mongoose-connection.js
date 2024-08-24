const mongoose = require("mongoose");
const config = require ("config");
const debug = require("debug")("development : monogoose");


mongoose.connect(`${config.get("MONGODB_URL")}/Mini-backend-project`).then(function(){
    debug("Connected to MongoDB");
})
.catch(function(err){
    debug(err);
})

module.exports = mongoose.connection;