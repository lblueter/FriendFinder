var express = require('express')
var router = express.Router()

router.get('/', function (req, res) {
  res.send('home.html')
})

router.get('/survey', function (req, res) {
  res.send('survey.html')
})

module.exports = router