const User = require("../models/user.model");
const bcrypt = require("bcrypt");

const createUser = ({ name, password }) => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, 2, (errCrypto, hash) => {
            if (!errCrypto) {
                new User({
                    name,
                    password: hash,
                })
                    .save()
                    .then((userInserted) => {
                        resolve(userInserted);
                    })
                    .catch((errInsertion) => {
                        reject(errInsertion);
                    });
            } else {
                reject(errCrypto);
            }
        });
    });
};

module.exports = {
    createUser,
};
