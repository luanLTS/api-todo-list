require("dotenv").config();
const mongoose = require("mongoose");
const {
    MONGODB_USER,
    MONGODB_PASSWD,
    MONGODB_CLUSTER,
    MONGODB_HOST,
    MONGODB_DATABASE,
} = process.env;

mongoose
    .connect(
        `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWD}@${MONGODB_CLUSTER}.${MONGODB_HOST}.mongodb.net/${MONGODB_DATABASE}?retryWrites=true&w=majority`
    )
    .then(() => {
        console.log("Conexao Ok");
    })
    .catch((err) => {
        console.log("Conexao não Ok");
        console.error(err);
    });

module.exports = mongoose;
