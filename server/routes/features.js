const express = require('express')

const db = require('../db/beaches')

const router = express.Router()

router.get('/:id', (req, res) => {
  const beachId = req.params.id
  db.getFeaturesByBeachId(beachId)
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
