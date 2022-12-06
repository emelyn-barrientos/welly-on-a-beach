const connection = require('./connection')

function getAllBeaches(db = connection) {
  return db('beaches').select()
}

function getBeachById(id, db = connection) {
  return db('beaches').select().where('id', id).first()
}

function getFeaturesByBeachId(beachId, db = connection) {
  return db('beaches_features')
    .join('beaches_features', 'features.id', 'beaches_features.feature_id')
    .where('beaches_id', beachId)
    .select('features.name')
}

module.exports = {
  getAllBeaches,
  getBeachById,
  getFeaturesByBeachId,
}
