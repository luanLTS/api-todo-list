const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    toggle: { type: Boolean, required: true },
});

const listSchema = mongoose.Schema({
    todos: [todoSchema],
});

module.exports = mongoose.model("Todos", listSchema);
