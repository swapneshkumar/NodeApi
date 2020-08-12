require('dotenv/config');
const mongoose = require('mongoose');
const Account = require('../model/account/registerModel');
var userAccount = {};
userAccount.registerUser = async function (userData) {
    console.log(mongoose.connection.readyState);
    var rsData;
    try {
        const account = new Account(userData);
        console.log(account)
        rsData = await account.save();
    } catch (error) {
        console.log("error", rsData);
        rsData = error;
    }

    console.log("completd", rsData);
    return rsData;
}

module.exports = userAccount;