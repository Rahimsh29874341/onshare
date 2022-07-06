const express = require('express')
const app = express()
const env = require("dotenv").config()
const path = require('path')
const cors = require('cors')

const PORT = process.env.PORT || 3000;

app.use('/static', express.static(path.join(__dirname, 'assets')))
app.use(express.json())

const connectDB = require('./config/db')
connectDB()

// Cors 
const corsOptions = {
    origin: process.env.ALLOWED_CLIENTS
}
app.use(cors(corsOptions));

//Template engine
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')

//routes
app.use('/api/files', require('./routes/files'));
app.use('/files', require('./routes/show'));
app.use('/files/download',require('./routes/download'))

app.get('/',(req,res)=>{
    res.render('index')
})

app.listen(PORT , () =>{
    console.log(`Server runnning on ${PORT} http://localhost:${PORT}/`)
})