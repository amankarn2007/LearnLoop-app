const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

module.exports = (req, res, next) => {
    let token = req.cookies.admin_token;
    //console.log(token);

    if(!token){
        console.log("No token found, blocking access");
        return res.json({message: "you are not logged in"});
    }

    try{
        const decoded = jwt.verify(token, secret);
        req.admin = decoded; //for future use in controllers

        next();

    } catch(err){
        return res.json({message: "something went wrong in admin login"});
    }
}