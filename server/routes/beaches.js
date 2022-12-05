const express = require('express')

const db = require('../db/beaches')
const reviewsDb = require('../db/reviews')

const router = express.Router()

router.get('/', (req, res) => {
  db.getAllBeaches()
    .then((results) =>
      results.map((result) => {
        return reviewsDb.getReviewsByBeachId(result.id).then((reviews) => {
          result.reviews = reviews || []
          return result
        })
      })
    )
    .then((pendingReviewQueries) => Promise.all(pendingReviewQueries))
    .then((completedBeachesObj) => {
      res.json(completedBeachesObj)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getBeachById(id)
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
