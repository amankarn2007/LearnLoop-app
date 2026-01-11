const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
require("./config/mongooseConnection");
const indexRouter = require("./routes/indexRouter");
const userRouter= require("./routes/userRouter");
const adminRouter = require("./routes/adminRouter");
const courseRouter = require("./routes/courseRouter");
const path = require("path");
const ejs = require("ejs");


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.json("hi");
});

app.use("/", indexRouter);
app.use("/user", userRouter); //user login, logout
app.use("/admin", adminRouter); //admin login, logout, register, 
app.use("/course", courseRouter); //course related routes

app.listen(3000);