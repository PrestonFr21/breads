//const { application } = require('express')
const express = require('express')
const bread = require('../models/bread.js')
const breads = express.Router()
const Bread = require('../models/bread.js')

//INDEX
breads.get('/', (req, res) => {
  res.send(Bread)
})

// SHOW
// breads.get('/:arrayIndex', (req, res) => {
//   res.send(Bread[req.params.arrayIndex])
// })

// SHOW
breads.get('/:arrayIndex', (req, res) => {
    res.send(Bread[req.params.arrayIndex])
  })
  

module.exports = breads

