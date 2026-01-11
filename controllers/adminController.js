const adminModel = require("../models/adminModel");
const userModel = require("../models/userModel");
const genrateToke = require("../utils/genrateToken");
const bcrypt = require("bcrypt");

module.exports.renderSigningFrom = (req, res) => {
    res.send("asdf1");
}

module.exports.createAdmin = async (req, res) => {
    const {email, password, firstName, lastName} = req.body;

    const Admin = await adminModel.findOne({email: email});
    if(Admin) return res.json({messasge: "admin already exists"});

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    try {
        const admin = await adminModel.create({
            email,
            password: hash,
            firstName,
            lastName
        })
        res.send(admin);

        const token = genrateToke(admin);
        res.cookie("admin_token", token);
    } catch(err){
        console.log(err);
    }
}

module.exports.renderAdminLoginForm = (req, res) => {
    res.render("adminLogin");
}

module.exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try{
        const admin = await adminModel.findOne({email: email});
        if(!admin) return res.json({message: "admin not found"});

        //new version of bycrypt comparing
        const isCorrect = await bcrypt.compare(password, admin.password);

        if(isCorrect){
            const token = genrateToke(admin);
            res.cookie("admin_token", token);

            res.send(token);
        };
        return res.json({message: "error in admin loggin"});

    } catch(err){
        return console.log("error in Admin login");
    }
}