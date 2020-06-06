const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport');
const cors = require('cors')


const users = require('./routes/api/users')
// const profile = require('./routes/api/profile')
// const posts = require('./routes/api/posts')
// const todoRoutes = require('./routes/todo/todo')
const connectionRoutes = require('./routes/connection')
// const teacherRoutes = require('./routes/teachers/teachers')
// const esrRoutes = require('./routes/esrentry/employeeDetails');
// const photoUploadRoutes = require('./routes/esrentry/photouploadDetails')
const naduneduRoutes = require('./routes/nadunedu');

const app = express();



//Body Parser middleware
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())


//DB config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
    .connect(db,{useNewUrlParser: true,useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
    .then(()=>console.log('MongoDB connected...'))
    .catch(error=>console.log('Error connecting MongoDB'))

//Passport Middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport)

// use routes

app.use('/api/users', users)
// app.use('/api/profile', profile)
// app.use('/api/posts', posts)
// app.use(todoRoutes)
app.use(connectionRoutes)
// app.use(teacherRoutes)
// app.use(esrRoutes)
// app.use(photoUploadRoutes)
app.use(naduneduRoutes)

const port = process.env.port || 5000;

app.listen(port, ()=>{console.log(`DevConnector server started on port ${port}`)})