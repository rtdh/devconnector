const express = require('express');

const app = express.Router();

//@route    GET api/profile/test
//desc      Test profile route
//@access   Public
app.get('/test', (req, res)=>{
    res.json({msg: "Profile works"})
})

module.exports = app;