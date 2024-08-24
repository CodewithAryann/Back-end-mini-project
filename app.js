const express = require("express");
const app = express();
const cookiePerser = require("cookie-parser");
const path = require("path");
const db =require("./config/mongoose-connection");
const onwersRouter = require("./routes/ownersRouters");


app.use(express.json);
app.use(express.urlencoded({extended:true}));
app.use(cookiePerser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use("/owners", onwersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);
app.listen(3000);

