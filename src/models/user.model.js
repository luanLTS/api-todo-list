const mongoose = require("mongoose");
const todoModel = require("./todo.model");

const UserSchema = mongoose.Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    todoList: [todoModel],
});

module.exports = mongoose.model("User", UserSchema);
