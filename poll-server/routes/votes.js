var express = require('express');
var Pusher = require('pusher');

var router = express.Router();
var pusher = new Pusher({
  appId: '580728',
  key: '142f79f9c0dec8e52faf',
  secret: '90609d9c07dcaed90f90',
  cluster: 'eu',
  encrypted: true
});
// /* Vote
router.post('/', function(req, res, next) {
  pusher.trigger('poll', 'vote', {
    points: 10,
    festival: req.body.festival
  });
  res.send('Voted');
});
module.exports = router;