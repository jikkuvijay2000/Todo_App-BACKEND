const express = require('express');
const { userLogin, userRegister } = require('../Controllers/users');


const router = express.Router();



router.post('/login',userLogin);

router.post('/register',userRegister);


module.exports={userRouter:router};