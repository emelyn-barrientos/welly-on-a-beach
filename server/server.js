const express = require('express')
const path = require('path')

const beachesRoutes = require('./routes/beaches')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/beaches', beachesRoutes)

server.get('*', (req, res) => { res.sendFile(path.resolve('server/public/index.html')) })

module.exports = server
