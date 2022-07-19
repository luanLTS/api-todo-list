const express = require("express");
const router = express.Router();

const { createUser, loginUser } = require("../controller/user.controller");
const { genToken } = require("../controller/auth.controler");

router.use(express.json());

router.post("/signup", async (req, res) => {
    try {
        let userInserted = await createUser(req.body);
        let token = await genToken({
            username: userInserted.username,
            id: userInserted._id,
        });
        res.json({
            success: true,
            data: {
                userInserted,
                token: token,
            },
        });
    } catch (e) {
        res.json({
            success: false,
            data: e,
        });
    }
});

router.post("/signin", async (req, res) => {
    try {
        let userLogged = await loginUser(req.body);
        let token = await genToken({
            username: userLogged.username,
            id: userLogged._id,
        });

        res.json({
            success: true,
            data: {
                token,
            },
        });
    } catch (e) {
        res.json({
            success: false,
            data: e,
        });
    }
});

module.exports = router;
