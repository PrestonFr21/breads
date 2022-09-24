const { application } = require('express')
const express = require('express')
const app = express()

require('dotenv').config()
const PORT = process.env.PORT
console.log(PORT)

//Routes
app.get('/', (req, res) => {
    res.send ('Welcome to an Awesome Breads App')
})

//Breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)
  
app.listen(PORT, () => {
    console.log('I am awake!', PORT)
})