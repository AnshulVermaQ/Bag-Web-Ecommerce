const express = require("express");
const router = express.Router();

const isloggedIn = require("../middleware/isLoggedIn");

router.get("/shop",(req,res)=>{
    res.render("shop");
})

module.exports = router;