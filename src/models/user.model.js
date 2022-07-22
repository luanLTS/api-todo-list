const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    idTodoList: { type: mongoose.Types.ObjectId, required: true },
});

module.exports = mongoose.model("User", UserSchema);
