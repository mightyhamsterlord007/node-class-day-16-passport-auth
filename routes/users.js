var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  userController.getAllUsers({})
    .then((users) => {
      res.json({
        message: 'Success',
        data: users
      });
      return;
    })
    .catch((error) => {
      res.json({
        message: 'Failure',
        data: error
      });
      return;
    });
});

router.post('/createuser', function(req, res, next) {

  userController.createUser(req.body)
    .then((user) => {
      res.json({
        message: 'Success',
        data: user
      });
      return;
    })
    .catch((error) => {
      res.json({
        message: 'Failure',
        data: error
      });
      return;
    });
});

module.exports = router;
