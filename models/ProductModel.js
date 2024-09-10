const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    image:String,
    name:String,
    price:Number,
    discount:{
        type:Number,
        default:0
    },
    bgcolor:String,
    panelColor:String,
    textColor:String

})

module.exports = mongoose.model("scatchProduct",ProductSchema);