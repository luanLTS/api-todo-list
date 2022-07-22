const express = require("express");
const router = express.Router();

const { checkToken } = require("../controller/auth.controler");

router.use(express.json());
router.use((req, res, next) => {
    if (!req.body.token) {
        res.json({
            success: false,
            data: "Access without token is not possible.",
        });
    }
    next();
});
router.use(checkToken);

// devolver apenas um todo especifico
router.get("/:id", async (req, res) => {
    res.send("passou pela validacao de token" + req.params.id);
});

//devolver todos os todos do usuario
router.get("/", async (req, res) => {});

//atulizar um todo especifico
router.put("/:id", async (req, res) => {});

//deletar um todo especifico
router.delete("/:id", async (req, res) => {});

module.exports = router;
