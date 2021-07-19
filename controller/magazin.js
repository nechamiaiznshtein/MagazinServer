const Magazin = require("../model/magazin");


const addMagazin = (req, res) => {
    const newMagazin = new Magazin(req.body)
    newMagazin.save().then((magazin) => {
        res.status(200).json({ newMagazin: magazin })
    }).catch((err) => {
        console.log(`error in addMagazin: ${err}`);
        res.status(400).send(err.message)
    })
}


const getAllMagazins = (req, res) => {
    Magazin.find().then((magazins) => {
        res.status(200).json({ allTheMagazins: magazins })
    }).catch((err) => {
        console.log(`error in getAllMagazin: ${err}`);
        res.status(400).send(err.message)
    })
}


module.exports = { addMagazin, getAllMagazins }
