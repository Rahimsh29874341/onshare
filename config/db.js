const mongoose = require('mongoose')
require("dotenv").config()

const connectDB = async function(){
try {
    await mongoose.connect('mongodb://localhost:27017/test')
    console.log('database connected');
  } catch (error) {
    console.log(`database failed ${error}`)
  }
}

module.exports = connectDB