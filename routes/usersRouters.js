const express = require("express");
const usermodel = require("../models/usermodel");
const routes = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

routes.get("/", function (res, req) {
    res.send("Hello World");
})

routes.post("/register", function (res, req) {
    try {
        let { email, password, fullname } = res.body;

        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(password, salt, async function (err, hash) {
                if (err) return res.send(err.message);
                else {
                    let user = await usermodel.create({
                        email,
                        password : hash,
                        fullname
                    });
                  let token =  jwt.sign({ email, id : user._id}, "heyheyhey");
                  res.cookie("token", token);
                  res.send("user create successfully")
            })
        })
        
    }
    catch (err) {
        res.send(err);
    }

})



module.exports = routes;