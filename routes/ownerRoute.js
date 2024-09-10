const express = require("express");
const router = express.Router();
const Ownermodel = require("../models/ownerModel");

router.get("/", (req, res) => {
    res.send("Owner working");
})

router.post("/create", async (req, res) => {

    try {
        let { fullname, email, password } = req.body;


        let createOwner = await Ownermodel.create({
            fullname,
            email,
            password
        })

        res.status(200).send(createOwner);
        console.log(createOwner);
    } catch (err) {
        res.status(500).send(err);
    }
})

module.exports = router;