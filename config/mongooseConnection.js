const mongoose = require("mongoose");

const uri = process.env.MONGO_URL;

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