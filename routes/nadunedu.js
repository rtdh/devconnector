const express = require('express')
const mysql = require('mysql')
const app = express.Router()

app.get('/getmandals', (req, res)=>{
    //console.log('get teachers route')
    const sql = `SELECT distinct mandal FROM nadunedu GROUP BY mandal`;
    db.query(sql, (err, mandals)=>{
        if(err) throw err;
        res.json(mandals)
    })
})

app.post('/getschools', (req, res)=>{
    
    console.log(req.body.mandal)
    
    const sql = `SELECT schoolname FROM nadunedu where mandal='${req.body.mandal}'`;
    db.query(sql, (err, schools)=>{
        if(err) throw err;
        res.json(schools)
    })
})


app.post('/addNewEntry', (req,res)=>{
    //console.log(req.body.mandal)

    const sql = `INSERT INTO nadunedu_entry VALUES ('${req.body.dot}', '${req.body.mandal}', '${req.body.school}', '${req.body.funds_estimated}', '${req.body.funds_receivedOne}', '${req.body.funds_receivedTwo}', '${req.body.funds_expenditure}', '${req.body.cement_company}', '${req.body.cement_required}', '${req.body.cement_indent_placed}', '${req.body.cement_received}', '${req.body.sand_required}', '${req.body.sand_indent_placed}', '${req.body.sand_received}', '${req.body.metal_required}', '${req.body.metal_received}', '${req.body.steel_required}', '${req.body.steel_received}', '${req.body.cement_bricks_req}', '${req.body.cement_bricks_rec}', '${req.body.cley_bricks_req}', '${req.body.cley_bricks_rec}', '${req.body.wb_req}', '${req.body.wb_upload}', '${req.body.wb_rec}', '${req.body.urinals_req}', '${req.body.urinals_upload}', '${req.body.urinals_rec}', '${req.body.wc_req}', '${req.body.wc_upload}', '${req.body.wc_rec}', '${req.body.fans_req}', '${req.body.fans_upload}', '${req.body.fans_rec}', '${req.body.db_class_1_3_req}', '${req.body.db_class_1_3_upload}', '${req.body.db_class_1_3_rec}', '${req.body.db_class_4_7_req}', '${req.body. db_class_4_7_upload}', '${req.body.db_class_4_7_rec}', '${req.body.db_class_7_10_req}', '${req.body.db_class_7_10_upload}', '${req.body.db_class_7_10_rec}', '${req.body.tables_req}', '${req.body.tables_upload}', '${req.body.tables_rec}', '${req.body.chairs_req}', '${req.body.chairs_upload}', '${req.body.chairs_rec}', '${req.body.almirah_req}', '${req.body.almirah_upload}', '${req.body.almirah_rec}', '${req.body.chalk_board_req}', '${req.body.chalk_board_upload}', '${req.body.chalk_board_rec}', '${req.body.tv_req}', '${req.body.tv_upload}', '${req.body.tv_rec}' )`;

    db.query(sql, (err, results)=>{
        if(err) throw err
        console.log(results)
        res.json(results)
    })

    
})

module.exports = app;