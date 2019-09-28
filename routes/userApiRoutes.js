const db = require("../models");
console.log(db)
// requiring bcrypt package to hide user passwords.
const bcrypt = require("bcryptjs");
module.exports = app => {
    // generating salt for password encryption.
    const salt = bcrypt.genSaltSync(10);
    //route to log in user and return user ID.
    app.get("/login", (req, res) => {

    });


    // route to add new user to database.
    app.post("/api/signup", (req, res) => {
        // deconstructing the form into 3 variables.
        const { name, username, password } = req.body;
        // validating that username and password exists if not sends error message.
        if (username === "" || !username || password === "" || !password || name === "" || !name) {
            res.status(400).json("Please enter valid username name and password")
        }
        // if they exist password is turned into hash.
        const hash = bcrypt.hashSync(password, salt);
        db.User.create({ name: name, username: username, password: hash }).then(user => {
            res.json({ id: user.id, name: user.name, username: user.username, coins: user.coins })
        }

        ).catch(error => {
            console.log(error)
            res.status(500).json("error saving user to db")
        })

    })
}