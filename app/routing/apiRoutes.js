var express = require('express')
var friends = require('./../data/friends')
var router = express.Router()

var compare = function () {

}
function add(a, b) {
  return a + b;
}
router.get('/api/friends', function (req, res) {
  res.json(friends);
})

router.post('/api/friends', function (req, res) {
  friends.push(req.body)
  var matchScore = req.body.scores.reduce(add, 0)
  console.log(matchScore)
  for (var i = 0; i < friends.length; i++) {
    var sum = friends[i].scores.reduce(add, 0);
    console.log(sum)

  }

  

  console.log(sum);
  // Handle incoming survey results
  // Handle compatibility logic 

})

module.exports = router