var express = require('express');
var router = express.Router();
var db = require('./../queries');

/*router.get('/api/puppies', db.getAllPuppies);
router.get('/api/puppies/:id', db.getSinglePuppy);
router.post('/api/puppies', db.createPuppy);
router.put('/api/puppies/:id', db.updatePuppy);
router.delete('/api/puppies/:id', db.removePuppy);
router.get('/api/puppies/sex/:sex', db.getPuppiesBySex)
*/
router.get('/user', db.getUser)
router.get('/devices', db.getDevices)
router.post('/reg', db.user_register)
router.post('/device',db.addDevice)


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
