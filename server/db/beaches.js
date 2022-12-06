const connection = require('./connection')

function getAllBeaches(db = connection) {
  return db('beaches').select()
}

function getBeachById(id, db = connection) {
  return db('beaches').select().where('id', id).first()
}

function getFeaturesByBeachId(beachId, db = connection) {
  return db('features')
    .join('beaches_features', 'features.id', 'beaches_features.features_id')
    .where('beaches_id', beachId)
    .select('feature')
}

module.exports = {
  getAllBeaches,
  getBeachById,
  getFeaturesByBeachId,
}
