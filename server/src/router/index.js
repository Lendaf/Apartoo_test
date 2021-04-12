const express = require('express');
const router = express.Router();

const signIn = require('../controller/authenticate/signIn');
const signUp = require('../controller/authenticate/signUp');

router.get('/signIn', signIn)
router.post('/signUp', signUp)

const { findUser, updateUser } = require('../controller/user/user');

router.get('/findUser', findUser)
router.put('/updateUser', updateUser)

module.exports = router;