const express = require("express");
const router = express.Router();

const { checkToken, decodeToken } = require("../controller/auth.controler");
const {
    getTodo,
    getTodoList,
    updateTodo,
    deleteTodo,
    toggleTodo,
    createTodo,
} = require("../controller/todo.controller");

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
    try {
        const todo = await getTodo(req.params.id);
        res.json({
            success: true,
            data: todo,
        });
    } catch (e) {
        res.json({
            success: false,
            data: e,
        });
    }
});

//devolver todos os todos do usuario
router.get("/", async (req, res) => {
    try {
        const token = await decodeToken(req.body.token);
        const todoList = await getTodoList(token.data.id);
        res.json({
            success: true,
            data: todoList,
        });
    } catch (e) {
        res.json({
            success: false,
            data: e,
        });
    }
});

//atulizar um todo especifico
router.put("/:id", async (req, res) => {
    try {
        const updatedTodo = await updateTodo(req.params.id, req.body);

        res.json({
            success: true,
            data: updatedTodo,
        });
    } catch (e) {
        res.json({
            success: false,
            data: e,
        });
    }
});

//deletar um todo especifico
router.delete("/:id", async (req, res) => {
    try {
        const deletedTodo = await deleteTodo(req.params.id);

        res.json({
            success: true,
            data: deletedTodo._id,
        });
    } catch (e) {
        res.json({
            success: false,
            data: e,
        });
    }
});

router.post("/", async (req, res) => {
    try {
        const token = await decodeToken(req.body.token);
        const todo = {
            title: req.body.title,
            description: req.body.description,
            toggle: false,
        };
        const createdTodo = await createTodo(todo, token.data.id);

        res.json({
            success: true,
            data: createdTodo._id,
        });
    } catch (e) {
        res.json({
            success: false,
            data: e,
        });
    }
});

router.put("/toggle/:id", async (req, res) => {
    try {
        const toggledTodo = await toggleTodo(req.params.id);

        res.json({
            success: true,
            data: toggledTodo._id,
        });
    } catch (e) {
        res.json({
            success: false,
            data: e,
        });
    }
});

module.exports = router;
