
const mongoose = require('mongoose');

const PictureSchema = mongoose.Schema({

    id: {
        type: Number
    },

    thumbnailUrl: {
        type: String,
        require: true
    },

    title: {
        type: String
    },

    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }

})

module.exports = mongoose.model('Picture', PictureSchema)