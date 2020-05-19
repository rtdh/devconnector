const express = require('express');

const app = express.Router();

//@route    GET api/posts/test
//desc      Test posts route
//@access   Public
app.get('/test', (req, res)=>{
    res.json({msg: "Posts works"})
})

module.exports = app;