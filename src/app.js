const express = require("express");
const app = express();
const cors = require("cors");

const conn = require("./connection/db.connection");

// routes
const userRoutes = require("./routes/user.route");
const todosRoutes = require("./routes/todo.route");

app.use(express.json());
app.use(cors());

app.use("/user", userRoutes);
app.use("/todos", todosRoutes);

module.exports = app;
