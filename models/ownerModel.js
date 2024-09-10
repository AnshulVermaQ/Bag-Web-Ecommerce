const mongoose = require("mongoose");

const ownerSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    product:{
        type:Array,
        default:[]
    },
    
    picture:String,
    gstin:Number
});

module.exports = mongoose.model("Owner", ownerSchema);
