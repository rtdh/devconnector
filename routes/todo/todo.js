const express = require('express')

const app = express.Router()

const Todo = require('../../models/todo')


app.get('/todoslist', (req,res)=>{
    Todo.find({}, (err, todos)=>{
        if(err) throw err
        res.json(todos)
    })
})

app.get('/todos/:id', (req, res)=>{
    Todo.findById(req.params.id, (err, todo)=>{
        if(err) throw err
        //console.log(todo)
        res.json(todo)
    })
})


app.post('/createtodo', (req, res)=>{
    Todo.create(req.body, (err, newTodo)=>{
        if(err) throw err
        res.json(newTodo)
    })
})

app.post('/update/:id', (req, res)=>{
    console.log(req.params.id)
    Todo.findById(req.params.id, async (err, todo)=>{
        if(err) throw err
        //console.log(todo)
        todo.completed = !todo.completed
        await todo.save()
            .then(todo=>{
                console.log(todo)
                res.json(todo)
            })
            .catch(err=>{
                console.log(err)
            })
    })
})




app.post('/todos/update/:id', (req, res)=>{
    Todo.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedTodo)=>{
        if(err) throw err
        res.json(updatedTodo)
    })
})

app.delete('/todos/delete/:id', (req,res)=>{
    Todo.findByIdAndRemove(req.params.id, (err)=>{
        if(err) throw err
        res.json({"msg": "delete succes"})
    })
})


module.exports = app;