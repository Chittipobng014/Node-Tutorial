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
router.post('/getuser', db.getUser)
router.post('/getdevices', db.getDevices)
router.post('/unlock', db.unlock)
router.post('/adddevice', db.addDevice)
router.post('/addinfo', db.memberRegister)
router.post('/adduser', db.userRegister)


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
