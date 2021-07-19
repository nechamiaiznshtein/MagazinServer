const mongoose = require('mongoose')

const magazinSchema = mongoose.Schema({

    title: {
        type: String
    },
    subTitle: {
        type: String
    },
    context: {
        type: String
    },
    image: {
        type: String,
        require: true
    },
    posts: [{
        type: mongoose.Types.ObjectId,
        ref: 'Post'
    }]
})

module.exports = mongoose.model('Magazin', magazinSchema);