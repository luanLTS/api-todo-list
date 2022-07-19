const express = require("express");
const router = express.Router();

const { checkToken } = require("../controller/auth.controler");

router.use(express.json());

router.post("/signin", (req, res) => {
    res.send("Hello sign in");
});

router.post("/signup", async (req, res) => {
    res.send(
        "Hello sign up" +
            (await checkToken(
                "sakdgsajdhfgsahdgsafddfjhgasdsajda21387213621873tghb"
            ))
    );
});

module.exports = router;
