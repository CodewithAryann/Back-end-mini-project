const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27.017/Back-end-mini-project").then(function(){
    console.log("Connected to MongoDB");
})
.catch(function(err){
    console.log(err);
})