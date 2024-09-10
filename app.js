const express = require('express');
const app = express();

const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const ownerRoute = require("./routes/ownerRoute");
require("dotenv").config();

const User = require('./models/UserModel');
const con = require("./db/connection");
const cookieParser = require('cookie-parser');
const path  = require("path");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const expressSession = require("express-session");
const flash = require("connect-flash");
const indexRouter = require("./routes/indexRouter");

app.use(express.static(path.join(__dirname,"public")));

const port = process.env.PORT || 4000;
app.set("view engine",'ejs');

app.get("/",(req,res)=>{
    res.render("cart.ejs");
})
app.use("/",indexRouter);
app.use("/users",userRoute);
app.use("/owners",ownerRoute);
app.use("/products",productRoute);

app.listen(port,()=>{
    console.log(`Server is ruuning at ${port}`);
})

