const express = require("express");
const router = express.Router();

const { createUser } = require("../controller/user.controller");
const { genToken } = require("../controller/auth.controler");

router.use(express.json());

router.post("/signup", async (req, res) => {
    try {
        let { userInserted, newTodoList } = await createUser(req.body);
        let token = await genToken({
            username: userInserted.name,
            idTodoList: newTodoList._id,
        });
        res.json({
            success: true,
            data: {
                userInserted,
                idTodoList: newTodoList._id,
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

module.exports = router;
