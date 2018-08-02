var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');
var passport = require('passport');
var checkAuth = require('../middleware/checkAuth');

/* GET users listing. */
router.get('/', checkAuth.isLoggedIn, function(req, res, next) {
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

router.get('/signup', function(req, res, next) {
  res.render('signup');
});

router.get('/signin', function(req, res, next) {
  res.render('signin');
});

router.post('/signin', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/users/signin',
  failureFlash: { type: 'error_msg', message: 'Invalid username or password!'}
}), (req, res, next) => {

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
