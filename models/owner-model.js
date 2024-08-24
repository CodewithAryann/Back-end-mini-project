const mongoose = require("mongoose");


const OwnerSchema = mongoose.Schema({
   fullname : {
    type : String,
    trim : true,
    minLength: 3,
   },
   email : String,
   password : String,
   products: {
    type: Array,
    default: []
   },
   picture : String,
   gstin : String

}) 

module.exports = mongoose.model("owner", OwnerSchema);