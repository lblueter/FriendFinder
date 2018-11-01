var express = require('express')

var router = express.Router()

router.get('/api/tables', function (req, res) {
  res.send('api things')
})

module.exports = router