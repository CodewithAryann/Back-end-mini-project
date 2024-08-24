const express = require("express");
const routes = express.Router();
const ownerModel = require("../models/owner-model")


routes.get("/", function( res, req){
    res.send("Hello World");
})

if (process.env.NODE_ENV === "development"){
    console.log(hey);
}
routes.get("/create", async function( res, req){
    let owner = await ownerModel.find();
    if(owner.length > 0) {
       return res.status(503).send(" you dont have permission make a account") 
    }
    res.send("we can create owner")  
})



module.exports = routes;