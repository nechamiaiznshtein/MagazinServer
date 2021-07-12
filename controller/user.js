const user = require("../model/user");

const addUser = (req, res) => {
    const newUser = new user(req.body)
    newUser.save()
        .then(newUser => res.json(newUser))
        .catch(err => res.send(err))
}

const removeUser = (req, res) => {
    //delete the user's magazines & post
    user.findByIdAndDelete(req.params.userId)
        .then(res.send('the user was removed!'))
        .catch(err => res.send(err))
}

module.exports = { removeUser, addUser }