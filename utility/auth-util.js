const jwt = require('jsonwebtoken');
require('dotenv/config')
    ;
const authService = {};

authService.authenticateToken = async(req, res, next) => {
    const token = req.headers['authorization'];
    if (!token)
        return res.status(401).json({ 'error': 'UserId or password incorrect!' });
    jwt.verify(token, process.env.TOKEN_KEY, (err, user) => {
        if (err)
            return res.status(401).json({ 'error': 'UserId or password incorrect!' });
        req.user=user;
        next();
    })

}

authService.getToken=async(userdata)=>{
   const token= jwt.sign({"userId":userdata.userId},process.env.TOKEN_KEY);
   return token;
}

module.exports=authService;