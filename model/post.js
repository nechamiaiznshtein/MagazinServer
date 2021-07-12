
const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({

    image: {
        type: String
    },
    title: {
        type: String
    },
    discription: {
        type: String
    },
    views: {
        type: Number
    },
    publishDate: {
        type: Date
    },
    magazinId: {
        type: mongoose.Types.ObjectId,
        ref: 'Magazin'
    }

})

module.exports = mongoose.model('Post', PostSchema)