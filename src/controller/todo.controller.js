const Todo = require("../models/todo.model");

const getTodo = (idTodo) => {
    return new Promise((resolve, reject) => {
        Todo.findOne({ _id: idTodo }, (err, todo) => {
            if (!err) {
                resolve(todo);
            } else {
                reject(err);
            }
        });
    });
};

const getTodoList = (idUser) => {
    return new Promise((resolve, reject) => {
        Todo.find({ idUser: idUser }, (err, todo) => {
            if (!err) {
                resolve(todo);
            } else {
                reject(err);
            }
        });
    });
};

const createTodo = (todo, idUser) => {
    return new Promise((resolve, reject) => {
        new Todo({
            title: todo.title,
            description: todo.description,
            toggle: todo.toggle,
            idUser,
        })
            .save()
            .then((todoCreated) => {
                resolve(todoCreated);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

const updateTodo = (idTodo, newTodo) => {
    return new Promise((resolve, reject) => {
        Todo.updateOne(
            { _id: idTodo },
            {
                $set: {
                    title: newTodo.title,
                    description: newTodo.description,
                },
            },
            (err, updatedTodo) => {
                if (!err) {
                    resolve(updatedTodo);
                } else {
                    reject(err);
                }
            }
        );
    });
};

const toggleTodo = (idTodo) => {
    return new Promise((resolve, reject) => {
        Todo.findOne({ _id: idTodo }, (errFind, todo) => {
            if (!errFind) {
                Todo.updateOne(
                    { _id: todo._id },
                    { $set: { toggle: !todo.toggle } },
                    (errUpdate, updatedTodo) => {
                        if (!errUpdate) {
                            resolve(updatedTodo);
                        } else {
                            reject(errUpdate);
                        }
                    }
                );
            } else {
                reject(errFind);
            }
        });
    });
};

const deleteTodo = (idTodo) => {
    return new Promise((resolve, reject) => {
        Todo.deleteOne({ _id: idTodo }, (err, deletedTodo) => {
            if (!err) {
                resolve(deletedTodo);
            } else {
                reject(err);
            }
        });
    });
};

module.exports = {
    getTodo,
    getTodoList,
    createTodo,
    updateTodo,
    deleteTodo,
    toggleTodo,
};
