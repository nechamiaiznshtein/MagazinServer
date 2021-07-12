const user = require("../model/user");


const login = (req, res) => {
    user.findOne({ email: req.body.email, password: req.body.password }).then(
        (user) => {
            if (user != null)
                res.json({ user: user })
            else
                res.send('false')
        }
    )
}




module.exports = { login }