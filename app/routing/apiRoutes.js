var express = require('express')
var friends = require('./../data/friends')
var router = express.Router()

router.get('/api/friends', function (req, res) {
  res.json(friends);
})

router.post('/api/friends', function (req, res) {
  newPerson = req.body
  // Handle incoming survey results
  // Handle compatibility logic 

})

module.exports = router