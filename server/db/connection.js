// const env = process.env.NODE_ENV || 'development'
// const knex = require('knex')
// const config = require('./knexfile')[env]
// const connection = knex(config[env])

const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const conn = require('knex')(config)

module.exports = conn
