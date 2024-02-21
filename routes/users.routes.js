const express=require('express')
const router=express.Router();
const { registerUser } = require('../controllers/users/register');
const { loginUser } = require('../controllers/users/login');
const { changePassword, deleteUser } = require('../controllers/users');
const { auth } = require('../middlewares/auth');
const { getUser } = require('../controllers/users/getUser');


router.post("/register",registerUser)

router.post('/login',loginUser)

router.get('/login',auth,getUser)

router.patch('/password/:id',auth,changePassword)

router.delete('/remove/:id',auth,deleteUser)


module.exports=router;