const Todo = require("../models/todo.model");
const User = require("../models/user.model");

const getTodo = (idTodo, idUser) => {
    return new Promise((resolve, reject) => {
        User.findOne({});
    });
};

const getTodoList = (idUser) => {};

const createTodo = (todo) => {};

const updateTodo = (id, todo) => {};

const deleteTodo = (id) => {};

module.exports = {
    getTodo,
    getTodoList,
    createTodo,
    updateTodo,
    deleteTodo,
};
