const express = require('express');
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const mongoose = require('mongoose');
const router = require('./route/api');
const dotenv = require('dotenv');
const cors = require('cors');
app.use(cors());
dotenv.config();

app.listen(8080, (req, res) => {
    console.log("listen!!!!");

})

const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}

mongoose.connect(process.env.CONNECT_DB, connectionParams).
    then(() => {
        console.log('connect!!!');
    }).
    catch((err) => { console.log(err); })


app.use('/', router)