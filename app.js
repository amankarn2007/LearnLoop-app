const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
require("dotenv").config(); //to acceses env file, should be before db connection
require("./config/mongooseConnection"); //database connection
const path = require("path");
const ejs = require("ejs");

const indexRouter = require("./routes/indexRouter");
const userRouter= require("./routes/userRouter");
const adminRouter = require("./routes/adminRouter");
const courseRouter = require("./routes/courseRouter");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

//app.get("/", (req, res) => {
//    res.json("hi");
//});

app.use("/", indexRouter);
app.use("/user", userRouter); //user login, logout
app.use("/admin", adminRouter); //admin login, logout, register, 
app.use("/course", courseRouter); //course related routes

app.listen(3000, () => {
    console.log("server is listning on port 3000");
});