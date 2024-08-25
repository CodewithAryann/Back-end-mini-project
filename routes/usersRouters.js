const express = require("express");
const usermodel = require("../models/usermodel");
const routes = express.Router();

routes.get("/", function( res, req){
    res.send("Hello World");
})

routes.post("/register", async function( res, req){
    try{
        let { email, password, fullname} = res.body;
     let user = await usermodel.create({
        email,
        password,
        fullname
    });
    }
    catch(err){
        console.log(err);
    }
    
})



module.exports = routes;