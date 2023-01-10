require('dotenv').config()
const express = require('express')
const route = require('./src/routers')
const db = require('./src/config/db')

const server = express()
const PORT = 5555

server.use(express.urlencoded({extended: false}))
server.use('/', route)

db.connect().then(() => {
    console.log('Database connected')
    server.listen(PORT, () => {
        console.log(`Service run on port ${PORT}`);
    })
}).catch(er => {
    console.log(er)
})