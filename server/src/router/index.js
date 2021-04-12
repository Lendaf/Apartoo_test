const express = require('express');
const signIn = require('../controller/authenticate/signIn');
const signUp = require('../controller/authenticate/signUp');
const router = express.Router();

router.get('/signIn', signIn)
router.post('/signUp', signUp)

module.exports = router;