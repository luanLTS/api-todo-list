const express = require("express");
const router = express.Router();

const { checkToken } = require("../controller/auth.controler");

router.use(express.json());
router.use(checkToken);

router.post("/", async (req, res) => {
    res.send("passou pela validacao de token");
});

module.exports = router;
