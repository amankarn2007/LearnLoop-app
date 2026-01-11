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

//sign karte time ham jo details bhejenge, usi se token genrate hoga. ham yaha jo detail's dalenge ham usi ko "sirf" access kar payenge "middilewares" me.
//agar token me jyada detail's hoga to ham use middileware ke through access karke use use kar skte hai.

//# Summary:
//Privacy: JWT mein sensitive data (Password, Address) kabhi mat daalo.
//Size: Token ko chota rakho taaki request fast ho.
//Freshness: Zarurat padne par ID ka use karke DB se fresh data nikalo.