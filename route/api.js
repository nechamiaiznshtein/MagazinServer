const router = require('express').Router();
// const picture = require('../controller/image');
// const login = require('../controller/login');
// const user = require('../controller/user');
const magazin = require('../controller/magazin');

//magazin
router.post('/addMagazin', magazin.addMagazin)
router.get('/getAllMagazins', magazin.getAllMagazins)





//user
// router.post('/login', login.login)
// router.post('/addUser', user.addUSer)


// //pictures
// router.get('/getPictures', picture.getPictures)
// router.post('/addPictureToUser', picture.addPictureToUser)
// router.get('/getAllPicturesByUser/:id', picture.getAllPicturesByUser)
// router.delete('/deletePictureByUser/:userId/:id', picture.deletePictureByUser)
// router.post('/uploadImage/:id', picture.uploadImage)

module.exports = router;
