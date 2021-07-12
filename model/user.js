const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({

    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    magazines: [{
        type: mongoose.Types.ObjectId,
        ref: 'Magazin'
    }]
})

module.exports = mongoose.model('User', UserSchema);