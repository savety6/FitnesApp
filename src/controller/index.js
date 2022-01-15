const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const helmet = require('helmet')
const morgan = require('morgan')

const app = express()
const usersRoute = require('./routes/users')
const authRoute = require('./routes/auth')

// mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true}, ()=>{
mongoose.connect("mongodb://localhost/test", {useNewUrlParser: true}, ()=>{
    console.log('connected to mongo');
})

//middleware
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

app.use("/api/users", usersRoute)
app.use("/api/auth", authRoute)

app.get("/", (req, res) => {
    res.send("hay welcome to the home page")
})

app.listen(8080, ()=>{
    console.log("we are in"); 
})