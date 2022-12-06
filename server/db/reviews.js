const connection = require('./connection')

function getReviewsByBeachId(id, db = connection) {
  return db('reviews').select().where('beaches_id', id)
}

function addReview(newReview, db = connection) {
  return db('reviews').insert(newReview)
}

function getReviewById(id, db = connection) {
  return db('reviews').select().where('id', id).first()
}

module.exports = {
  getReviewsByBeachId,
  addReview,
  getReviewById,
}
