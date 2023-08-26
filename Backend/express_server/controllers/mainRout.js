 const express = require("express");
const mainRout = express.Router();

mainRout.get("/", (req,res) => {
    res.send("Router main Get is working");
});

mainRout.post("/", (req,res) => {
    res.send("Router main Post is working");
});

module.exports = mainRout;