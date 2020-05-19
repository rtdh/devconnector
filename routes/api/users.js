const express = require('express');

const app = express.Router();

//@route    GET api/users/test
//desc      Test users route
//@access   Public
app.get('/test', (req, res)=>{
    res.json({msg: "Users works"})
})

module.exports = app;