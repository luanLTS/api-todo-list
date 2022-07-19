const express = require("express");
const app = express();
const cors = require("cors");

const conn = require("./connection/db.connection");

// routes
const userRoutes = require("./routes/user.route");

app.use(express.json());
app.use(cors());

app.use("/user", userRoutes);

app.get("", (req, res) => {
    console.log("teste");
    res.end();
});

module.exports = app;
