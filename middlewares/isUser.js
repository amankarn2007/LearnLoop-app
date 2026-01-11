const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

module.exports = (req, res, next) => {
    let token = req.cookies.token; //we stored token in cookies

    if(!token){
        return res.json({message: "user is not logged in"});
    }

    try{
        const decoded = jwt.verify(token, secret);
        req.user = decoded; //for future uses

        next();

    } catch(err){
        return res.json({message: "something wrong in user login"});
    }
}