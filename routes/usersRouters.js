const express = require("express");
const usermodel = require("../models/usermodel");
const routes = express.Router();
const bcrypt = require("bcrypt");

routes.get("/", function( res, req){
    res.send("Hello World");
})

routes.post("/register", async function( res, req){
    try{
        let { email, password, fullname} = res.body;

        bcrypt.genSalt(10, function (err, salt){
            bcrypt.hash(password, salt, function (err, hash){
                if (err) return res.send(err.message);
                else res.send(hash);
            })
        })
     let user = await usermodel.create({
        email,
        password,
        fullname
    });
    res.send(user);
    }
    catch(err){
        res.send(err);
    }
    
})



module.exports = routes;