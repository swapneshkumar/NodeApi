const { response } = require('express');

const route = require('express').Router();
const registerService = require('../services/account-service');

route.post('/register',async (req, resp, next) => {
    const data = {
        userId: req.body.userId,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    };
    console.log('route')
 const rsData=  await registerService.registerUser(data);
resp.send(rsData);

})

module.exports = route;