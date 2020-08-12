const mongoose=require('mongoose');

const account=new mongoose.Schema({
    userId:{
        type:String,
    },
    password:{
        type:String,
    },
    firstName:{
        type:String,
    },
    lastName:{
        type:String,
    }
});

module.exports=Account=mongoose.model("account",account);