const express = require('express');
var cors = require('cors')
require('dotenv/config');
const mongoose = require('mongoose');
var fs = require('fs')
var morgan = require('morgan')
var path = require('path')
const parser = require('body-parser');

const loginRoutes = require('./routes/login-routes');
const connectDB = require('./db/connection');


var app = express();
//app.options('*', cors()) 
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
        return res.status(200).json({});
    };
    next();
});

//********Register your middleware********* */
// create a write stream (in append mode)
app.use(express.json({ extended: false }));
app.use(parser.json());
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))
connectDB();

app.use('/api/', loginRoutes);

//*****************END******************** */



app.listen(parseInt(process.env.PORT), () => {
    console.log("Server is up and running!", process.env.PORT);
});