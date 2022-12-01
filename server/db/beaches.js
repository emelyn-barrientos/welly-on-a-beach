

const connection = require('./connection')


function getAllBeaches(db = connection) {
  return db('beaches').select()
}

function getBeachById(db = connection){
  return db('beaches').select().where('id', id).first()

}
module.exports = {
  getAllBeaches,
  getBeachById,
}
