const env = process.env.NODE_ENV || 'development'
const knex = require('knex')
const config = require('./knexfile')[env]
const connection = knex(config[env])

module.exports = connection
