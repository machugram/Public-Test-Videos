const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./app/routes/video.routes');
require('dotenv').config()

const app = express();

//importing files for database config file.
const dbconfig = require('./app/config/config');
const mongoose = require('mongoose');

//creating our express app with express.

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

mongoose.Promise = global.Promise;

routes(app);
//connecting to the mongoose connection

mongoose.connect(dbconfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
} )


app.get('/', (req,res) =>   {
    res.json({"message": "Welcome to Public Test Videos"});
})

port = process.env.PORT || 80
app.listen(port, () => {
    console.log("App started on server port 80 : http://localhost:80");
})