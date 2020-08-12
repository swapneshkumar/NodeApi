const mongoose = require('mongoose');
require('dotenv/config');
var options = {
    useMongoClient: true,
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    useNewUrlParser: true,
    useUnifiedTopology: true
};

const connectDB = async () => {

    mongoose.connect(process.env.CONNECTION_STRING, { dbName: 'student', useUnifiedTopology: true, useNewUrlParser: true }, (error) => {
        if (error)
            console.log(error);
    });

}


module.exports = connectDB;
