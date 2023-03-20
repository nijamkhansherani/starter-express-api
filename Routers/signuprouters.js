const express = require('express');
const router = express.Router();
router.use(express.json());

const { postsignup, LoginUser} = require('../Controllers/signupcontrollers')

router.post('/',postsignup)
router.post('/login',LoginUser)

module.exports = router