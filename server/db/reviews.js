const connection = require('./connection')

function getReviewsByBeachId(id, db = connection) {
  return db('reviews').select().where('beaches_id', id)
}
module.exports = {
  getReviewsByBeachId,
}
