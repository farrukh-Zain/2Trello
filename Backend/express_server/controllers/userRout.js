const express = require("express");
const userRout = express.Router();

userRout.get("/user", (req,res) => {
    res.send("Router user Get is working");
});

userRout.post("/user", (req,res) => {
    res.send("Router user Post is working");
});

module.exports = userRout;