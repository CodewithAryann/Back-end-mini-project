const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mini-backend-project").then(function(){
    console.log("Connected to MongoDB");
})
.catch(function(err){
    console.log(err);
})

module.exports = mongoose.connection;