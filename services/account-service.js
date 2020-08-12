require('dotenv/config');
const mongoose = require('mongoose');
const Account = require('../model/account/registerModel');
const Login=require('../model/account/loginModel');
var userAccount = {};
userAccount.registerUser = async function (userData) {
    var rsData;
    try {
        const account = new Account(userData);
        rsData = await account.save();
    } catch (error) {
        rsData = error;
    }
    return rsData;
}

userAccount.login=async(userData)=>{
    //const login=Login(userData);
   const rs= await Login.find(userData,['userId','firstName','lastName','_id']);
   return rs;
    
}

module.exports = userAccount;