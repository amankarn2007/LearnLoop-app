const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET;

const genrateToke = function(user){
    return jwt.sign(
        { email: user.email, password: user.password }, // jis chiz ka token banana hai
        secret, //jwt ka secret jo ".env" me hai
        { expiresIn: "7d" }, //token will be validate for 7 day
    );
}

module.exports = genrateToke;