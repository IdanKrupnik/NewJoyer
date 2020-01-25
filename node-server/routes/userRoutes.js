
const express = require("express");

const isAuth = require('../middleware/is-auth');

const usersController = require("../controllers/users");

const authController = require('../controllers/auth');

const router = express.Router();


const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: false }));


router.post('/login', authController.postLogin);
router.post('/register', usersController.postAddUser);

exports.routes = router;
