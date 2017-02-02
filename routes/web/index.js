var express = require('express');
var router = express.Router();
// var user = require('../models/user');

var signup = require('./signup');
var login = require('./login');
var list = require('./list');

// var Signup = require('../models/signup');


// router.get('/', function(req, res, next) {
//   res.render('signup');
// });


router.get('/signup', signup.anyname)
router.post('/signup', signup.post)
router.get('/login', login.anyname)
router.post('/login', login.post)
router.get('/list', list.anyname)
router.post('/list', list.post)

/* GET home page. */


module.exports = router;
