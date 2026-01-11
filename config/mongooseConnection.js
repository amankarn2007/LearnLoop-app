const mongoose = require("mongoose");

const uri = "mongodb://127.0.0.1:27017/LearnLoop";

async function connectDB(){
    try{
        await mongoose.connect(uri, {
            auth: {
                username: "amanAdmin",
                password: "Backend@987",
            },
            authSource: "admin",
        })
    } catch(err){
        console.log("DB connection error: ",err);
    }
}

connectDB();

module.exports = connectDB;