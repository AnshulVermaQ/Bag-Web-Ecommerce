const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const userModel = require("../models/UserModel");
const generateToken = require("../middleware/generateToken");

router.get("/", (req, res) => {
    res.send("User working");
});

router.post("/register", async (req, res) => {
    try {
        let { fullname, email, password } = req.body;

        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(password, salt, async function (err, hash) {
                if (err) return res.send(err.message);
                else {
                    let user = await userModel.create({
                        fullname,
                        email,
                        password: hash
                    });
                    let token = generateToken(user);
                    res.cookie("token", token);
                    res.send("User created");
                }
            });
        });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.post("/login", async (req, res) => {
    try {
        let { email, password } = req.body;  // Destructure password from req.body

        let user = await userModel.findOne({ email: email });

        if (!user) {
            return res.status(400).send("Email or password are incorrect");
        }

        bcrypt.compare(password, user.password, function (err, result) {
            if (err) return res.status(500).send(err.message);

            if (result) {
                let token = generateToken(user);
                res.cookie("token", token);
                res.status(200).send("You are logged in");
            } else {
                return res.status(400).send("Email or password are incorrect");
            }
        });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router;
