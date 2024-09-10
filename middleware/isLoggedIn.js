const jwt = require('jsonwebtoken');
const userModel = require("../models/UserModel");

module.exports = async function(req,res){
    if(!res.cookies.token){
        req.flash("You need to login first");
        return res.redirect("/");
    }try{
        let decoded = jwt.verify(req.cookies.token,process.env.JWT_SECRET_KEY);
        let user = await userModel
        .findOne({email:decoded.email})
        .select("-password");
        req.user = user;
        next();

    }catch(err){
        req.flash("Something went wrong");
        rq.redirect("/");
    }
}