const usermodel = require("../models/usermodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {generatetoken} = require("../utils/generatetoken");

module.exports.registerUser = function (res, req) {
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
                  let token =  generatetoken(user);
                  res.cookie("token", token);
                  res.send("user create successfully")
            })
        })
        
    }
    catch (err) {
        res.send(err);
    }

}