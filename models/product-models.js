const mongoose = require("mongoose");


const productsSchema = mongoose.Schema({
   image : String,
   name : String,
   price : Number,
   discount : {
    type : Number,
    default : 0
   },
   bgcolor : String,
   panelcolor: String,
   textcolor: String
}) 

module.exports = mongoose.model("rproduct", productsSchema);