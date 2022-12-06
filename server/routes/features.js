const express = require('express')

const db = require('../db/beaches')

const router = express.Router()

router.get('/features', (req, res) => {
  console.log(req)
  const beachId = req.body.id
  db.getFeaturesByBeachId(beachId)
    .then((result) => {
      console.log(result)
      res.json(result)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
