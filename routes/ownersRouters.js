const express = require("express");
const routes = express.Router();

routes.get("/", function( res, req){
    res.send("Hello World");
})


module.exports = routes;