const express = require("express");
const usermodel = require("../models/usermodel");
const routes = express.Router();

routes.get("/", function( res, req){
    res.send("Hello World");
})

routes.post("/register", async function( res, req){
    let { email, password, fullname} = res.body;
    await usermodel.create({
        email,
        password,
        fullname
    });
})



module.exports = routes;