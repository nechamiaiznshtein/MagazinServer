const Post = require('../model/post')
const Magazin = require('../model/magazin')


const addPost = async (req, res) => {
    try {
        const newPost = new Post(req.body)
        await newPost.save()
        await Magazin.findByIdAndUpdate(newPost.magazinId, { $push: { posts: newPost.object_id } })
        res.status(200).send('post has been saved')
    }
    catch (error) {
        res.status(400).send(error)
    }
}

const removePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        await Magazin.findByIdAndUpdate(post.magazinId, { $pull: { posts: post.id } })
        await Post.findByIdAndDelete(post.id)
        res.status(200).send('post has been removed')
    }
    catch (error) {
        res.status(400).send(error)
    }
}

module.exports = { addPost, removePost }