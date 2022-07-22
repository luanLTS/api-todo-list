require("dotenv").config();
const jwt = require("jsonwebtoken");

const secret = process.env.SECRET;

const genToken = ({ username, id }) => {
    return new Promise((resolve, reject) => {
        jwt.sign(
            {
                data: {
                    id,
                    username,
                },
            },
            secret,
            (err, payload) => {
                if (!err) {
                    resolve(payload);
                } else {
                    reject(err);
                }
            }
        );
    });
};

const checkToken = (req, res, next) => {
    jwt.verify(req.body.token, secret, (err, result) => {
        if (!err) {
            next();
        } else {
            res.json({
                success: false,
                data: err,
            });
        }
    });
};

const decodeToken = (token) => {
    return new Promise((resolve, reject) => {
        try {
            const payload = jwt.decode(token);
            resolve(payload);
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = {
    genToken,
    checkToken,
    decodeToken,
};
