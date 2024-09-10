const mongoose = require("mongoose");
 const con  = mongoose.connect("mongodb://127.0.0.1:27017/db")
.then(()=>{console.log("Connected")})
.catch((err)=>{console.log(err)});

module.exports = con;