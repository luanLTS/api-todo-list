const User = require("../models/user.model");
const Todos = require("../models/todo.model");
const bcrypt = require("bcrypt");

const createUser = ({ name, password }) => {
    return new Promise((resolve, reject) => {
        new Todos()
            .save()
            .then((newTodoList) => {
                bcrypt.hash(password, 2, (errCrypto, hash) => {
                    if (!errCrypto) {
                        new User({
                            name,
                            password: hash,
                            idTodoList: newTodoList._id,
                        })
                            .save()
                            .then((userInserted) => {
                                resolve({ userInserted, newTodoList });
                            })
                            .catch((errInsertion) => {
                                reject(errInsertion);
                            });
                    } else {
                        reject(errCrypto);
                    }
                });
            })
            .catch((err) => {
                reject(err);
            });
    });
};

const loginUser = ({ name, password }) => {
    return new Promise((resolve, reject) => {
        User.findOne({ name: name }, (err, user) => {
            if (!err) {
                // descriptografar a senha do usuário que veio do banco e bater com a que veio mna requisição
                bcrypt.compare(password, user.password, (err, result) => {
                    if (!err && result) {
                        resolve(user);
                    } else if (!err && !result) {
                        reject("Name or password invalid");
                    } else {
                        reject(err);
                    }
                });
            } else {
                reject(err);
            }
        });
    });
};

module.exports = {
    createUser,
    loginUser,
};
