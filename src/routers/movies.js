const express = require('express')
const routers = express.Router()
const ctrl = require('../controllers/movies')

routers.get('/', ctrl.gets)

module.exports = routers