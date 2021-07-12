// const { models } = require("mongoose");
const user = require("../model/user")


const addUSer = (req, res) => {
    console.log("body", req.body);
    const newUser = new user(req.body);
    newUser.save().then((user) => {
        res.json({ newUser: user })
    }).catch((err) => { console.log(err); })
}


module.exports = { addUSer }