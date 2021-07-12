
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
    pictures: [{
        type: mongoose.Types.ObjectId,
        ref: 'Picture'
    }]
})

module.exports = mongoose.model('User', UserSchema);