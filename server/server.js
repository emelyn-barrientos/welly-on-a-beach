const express = require('express')
const path = require('path')

const beachesRoutes = require('./routes/beaches')
const featuresRoutes = require('./routes/features')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/beaches', beachesRoutes)
server.use('/api/v1/features', featuresRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

module.exports = server
