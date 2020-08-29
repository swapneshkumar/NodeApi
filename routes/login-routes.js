const { response } = require('express');

const route = require('express').Router();
const registerService = require('../services/account-service');
const toeknutil=require('../utility/auth-util');

route.post('/register', async (req, resp, next) => {
    const data = {
        userId: req.body.userId,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    };
    const rsData = await registerService.registerUser(data);
    resp.send(rsData);
})

route.post('/login', async (req, res, next) => {
    const userData = req.body;
    const curruntUser = await registerService.login(userData);
    console.log('fetched data => ',curruntUser.length);
    if(curruntUser && curruntUser.length>0){
        const token= await toeknutil.getToken(curruntUser);
       return res.status(200).json({"token":token});
    }  
    res.status(401).json({"message":"Invalied User id or password","token":""});
})

route.get('/getData',toeknutil.authenticateToken,async(req,res,next)=>{
    res.send('welcome');
})

module.exports = route;