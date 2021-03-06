const mongoose = require('mongoose')

const magazinSchema = mongoose.Schema({

    title: {
        type: String
    },
    subTitle: {
        type: String
    },
    content: {
        type: String
    },
    image: {
        type: String,
        require: true
    },
    posts: [{
        type: mongoose.Types.ObjectId,
        ref: 'Post'
    }],
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Magazin', magazinSchema);