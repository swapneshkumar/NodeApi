const mongoose=require('mongoose');

const loginScema=new mongoose.Schema({
    userId:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
},{collection:'accounts'})

module.exports=Login=mongoose.model("user",loginScema);