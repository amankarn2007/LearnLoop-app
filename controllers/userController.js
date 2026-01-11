const express = require("express");
const userModel = require("../models/userModel");

module.exports.renderSigningFrom = (req, res) => {
    res.render("signin");
}

module.exports.createUser = async (req, res) => {
    const {email, password, firstName, lastName, course} = req.body;

    const user = await userModel.create({
        email, password, firstName, lastName, course,
    })

    res.send(user);
}