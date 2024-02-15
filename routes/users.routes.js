const express=require('express')
const router=express.Router();
const {UsersModel}=require('../models/users.model');
const { encryptWithNewSalt,saltEncrypt } = require('../controllers/users/encryption');
const { registerUser } = require('../controllers/users/register');
const { loginUser } = require('../controllers/users/login');
const { changePassword, deleteUser } = require('../controllers/users');
const { auth } = require('../middlewares/auth');


router.post("/register",registerUser)

router.post('/login',loginUser)

router.patch('/password/:id',auth,changePassword)

router.delete('/remove/:id',auth,deleteUser)


module.exports=router;