const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");
const genrateToke = require("../utils/genrateToken"); //jwt token gerater

module.exports.renderSigningFrom = (req, res) => {
    res.render("signin");
}

module.exports.createUser = async (req, res) => {
    const {email, password, firstName, lastName, course} = req.body;

    const User = await userModel.findOne({email: email});
    if(User) return res.json({message: "user already exists"});

    //salt and hash
    let salt = await bcrypt.genSalt(10); //salt
    let hash = await bcrypt.hash(password, salt);

    try{
        const user = await userModel.create({
            email,
            password: hash,
            firstName,
            lastName,
            course,
        })
        res.send(user);
    
        let token = genrateToke(user);
        res.cookies = ("token", token); //set the jwt token in cookies
    } catch(err){
        console.log("error in creating user, try again...");
    }

}

module.exports.renderLoginForm = (req, res) => {
    res.render(login);
}

module.exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email: email }); //user finded
    //console.log(user);

    try{
        bcrypt.compare(password, user.password, function(err, result) {
            if(result){
                //set the jwt token and render on dashboard
                let token = genrateToke(user);
                res.cookies = ("token", token);
    
                console.log("successful login");
                res.send(token);
            }
            else res.send("user cannot login");
        });
    } catch(err){
        console.log("login failed, try agin...");
    }
}