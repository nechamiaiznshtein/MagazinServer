// const request = require('request');
// const picture = require('../model/picture');
// const user = require('../model/user');
// const path = require('path');
// var express = require('express');
// var app = express();
// var multer = require('multer')
// var cors = require('cors');
// app.use(cors());



// function addNewPicture(newPath, idUser) {
//     const newObj = new picture({ thumbnailUrl: newPath, title: "", user: idUser })
//     newObj.save().then(pic => {
//         console.log(pic._id), user.findByIdAndUpdate(idUser, { $push: { 'pictures': pic._id } }).
//             then(g => { console.log(g); })
//     }).
//         catch(err => { console.log(err); })

// }



// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'D:\\Users\\User\\Desktop\\אתרא כללי\\פרוייקט כללי\\bigproject\\public\\images');
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname)
//         addNewPicture('../../images/' + file.originalname, req.params.id)
//     }
// })


// var upload = multer({ storage: storage }).single('file')

// const uploadImage = (req, res) => {
//     upload(req, res, function (err) {
//         if (err instanceof multer.MulterError) {
//             return res.status(500).json(err)
//         } else if (err) {
//             return res.status(500).json(err)
//         }
//         return res.status(200).send(req.file)

//     })
// }



// const requestApi = () => {
//     return new Promise((resolve, reject) => {
//         let options = {
//             method: "GET",
//             url: `http://jsonplaceholder.typicode.com/photos`
//         }
//         request(options, function (err, res, body) {
//             if (err) {
//                 reject(err)
//             }
//             else {
//                 resolve(body)
//             }
//         });
//     })
// }



// const getPictures = (req, res) => {
//     try {
//         requestApi().then((body) => {
//             const data = JSON.parse(body)
//             res.send(data);
//         })
//     }
//     catch {
//         console.log("error");
//     }
// }


// const addPictureToUser = (req, res) => {
//     console.log('hello!!!!!!!!!!', req.body);
//     debugger
//     console.log("rftgybhnjkm", req.body);
//     const newPicture = new picture(req.body);
//     newPicture.save().then((pic) => {
//         user.findByIdAndUpdate(req.body.user, { $push: { 'pictures': pic._id } })
//             .then(() => {
//                 console.log('in picture!');
//                 res.json({ picture: pic })
//             }).catch(err => {
//                 res.send({ "message": err })
//             })
//     })
// }


// const getAllPicturesByUser = (req, res) => {
//     debugger
//     console.log(req.params);
//     user.findById(req.params.id).populate({ path: 'pictures', select: 'id  thumbnailUrl title' }).then(
//         (pictures) => {
//             res.json({ pictures: pictures })
//         }).catch(err => console.log(err))
// }

// const deletePictureByUser = (req, res) => {
//     debugger
//     console.log("reqq", req.params);

//     picture.findByIdAndUpdate(req.params.id).then(pic => {
//         user.update({ _id: req.params.userId }, { $pull: { 'pictures': req.params.id } }).then(
//             user1 => {
//                 user.findById(req.params.userId).populate({ path: 'pictures', select: 'id thumbnailUrl title' }).then(pic => {
//                     res.json({ pic: pic })
//                 })
//             }
//         )
//     })

//     // user.update({ _id: req.params.userId }, { $pull: { 'pictures': req.params.id } });
//     // picture.findByIdAndDelete(req.params.id).then(picture1 => {
//     //     res.json({ pictureDelete: picture })
//     // }).catch(err => { console.log(err) })

// }



// const delPictureFromHistory = (req, res) => {
//     console.log(req.body.userId);
//     Picture.findOneAndDelete({ _id: req.params.id }).then(pic => {
//         User.update({ _id: req.body.userId }, { $pull: { 'pictures': pic._id } }).then(user => {
//             User.findById(req.body.userId).populate({ path: 'pictures', select: 'id thumbnailUrl title' }).then(pic => {
//                 res.json({ pic: pic })
//             })
//         }
//         )
//     })
// }



// module.exports = { getPictures, addPictureToUser, getAllPicturesByUser, deletePictureByUser, uploadImage }


