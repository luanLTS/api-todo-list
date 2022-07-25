const express = require("express");
const router = express.Router();

const { loginUser } = require("../controller/user.controller");
const { genToken } = require("../controller/auth.controler");

router.get("/signin", async (req, res) => {
    try {
        let userLogged = await loginUser(req.body);
        let token = await genToken({
            username: userLogged.name,
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
