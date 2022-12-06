const connection = require('./connection')

function getAllBeaches(db = connection) {
  return db('beaches').select()
}

function getBeachById(id, db = connection) {
  return db('beaches').select().where('id', id).first()
}

function getFeaturesByBeachId(beachId, db = connection) {
  return db('beaches_features').select('').where('beaches_id', beachId)
}

function getFeatureNameById(featId, db = connection) {
  return db('features').select('').where('id', featId)
}

module.exports = {
  getAllBeaches,
  getBeachById,
  getFeaturesByBeachId,
  getFeatureNameById,
}
