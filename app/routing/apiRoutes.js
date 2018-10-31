var express = require('express')

var router = express.Router()

router.get('/getThing', function (req, res) {
  res.send('api things')
})

module.exports = router