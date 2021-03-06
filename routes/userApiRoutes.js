const db = require("../models");
// requiring bcrypt package to hide user passwords.
const bcrypt = require("bcryptjs");
module.exports = app => {
    // generating salt for password encryption.
    const salt = bcrypt.genSaltSync(10);
    //route to log in user and return userinfo.
    app.post("/api/login", (req, res) => {
        const { username, password } = req.body
        if (username === "" || !username || password === "" || !password) {
            res.status(400).json("Please enter a valid username and password")
        }
        db.User.findOne({
            where: {
                username: username
            }
        }).then(userObject => {
            const { name, username, coins } = userObject;
            res.json({
                name,
                username,
                coins
            });
        }).catch(error => {
            res.json(error)
        });

    });


    // route to add new user to database.
    app.post("/api/signup", (req, res) => {
        // deconstructing the form into 3 variables.
        const { name, username, password } = req.body;
        // validating that username and password exists if not sends error message.
        if (username === "" || !username || password === "" || !password || name === "" || !name) {
            res.status(400).json("Please enter valid name, username, and password")
        }
        // if they exist password is turned into hash.
        const hash = bcrypt.hashSync(password, salt);
        db.User.create({ name: name, username: username, password: hash }).then(user => {
            res.json({ id: user.id, name: user.name, username: user.username, coins: user.coins })
        }

        ).catch(error => {
            res.status(500).json({ error: "error saving user to db" })
        })

    });

    app.get("/api/User", function (req, res) {
        db.User.findAll({}).then(function (dbUser) {
            res.json(dbUser);
        });
    });

    app.put("/api/:Users/coins", function (req, res) {
        db.User.update(
            req.body,
            {
                where: {
                    id: req.body.coins
                }
            }).then(function (dbPost) {
                res.json(dbPost);
            });
    });
}
