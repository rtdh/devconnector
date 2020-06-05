const express = require('express');

const app = express.Router()


app.get('/mandals', (req, res)=>{
    //console.log('get teachers route')
    const sql = `SELECT distinct mandal FROM teachers GROUP BY mandal`;
    db.query(sql, (err, mandals)=>{
        if(err) throw err;
        res.json(mandals)
    })
})

app.get('/teachers', (req, res)=>{
    const sql = `SELECT * FROM teachers`;
    db.query(sql, (err, teachers)=>{
        if(err) throw err;
        res.json(teachers)
    })
})

app.post('/schools', (req, res)=>{
    
    //console.log(req.body.mandal)
    
    const sql = `SELECT schoolname FROM teachers where mandal='${req.body.mandal}'`;
    db.query(sql, (err, schools)=>{
        if(err) throw err;
        res.json(schools)
    })
})

app.post('/teachers', (req, res)=>{
    console.log(req.body)
    const sql = `SELECT * FROM teachers where mandal='${req.body.mandal}' and schoolname='${req.body.school}'`;
    db.query(sql, (err, teachers)=>{
        if(err) throw err
        res.json(teachers)
    })
})


app.post('/teacher/:id', (req, res)=>{
    const sql = `SELECT * from teachers where id='${req.params.id}'`;
    db.query(sql, (err, results)=>{
        if(err) throw err
        console.log(results)
        res.json(results)
    })
})

module.exports = app;
