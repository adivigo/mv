const express = require('express')
const routers = express.Router()
const movies = require('./movies')

routers.use('/movies', movies)

module.exports = routers