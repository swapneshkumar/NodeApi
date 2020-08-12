const express = require('express');
require('dotenv/config');
const mongoose=require('mongoose');
var fs = require('fs')
var morgan = require('morgan')
var path = require('path')
const parser=require('body-parser');

const loginRoutes=require('./routes/login-routes');
const connectDB=require('./db/connection');


var app = express();

//********Register your middleware********* */
// create a write stream (in append mode)
app.use(express.json({extended:false}));
app.use(parser.json());
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))
 connectDB();

app.use('/api/',loginRoutes);

//*****************END******************** */



app.listen(parseInt(process.env.PORT), () => {
    console.log("Server is up and running!",process.env.PORT);
});