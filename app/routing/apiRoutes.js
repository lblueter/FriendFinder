var express = require('express')
var friends = require('./../data/friends')
var router = express.Router()

router.get('/api/tables', function (req, res) {
  res.json(friends);
})

module.exports = router