const express=require('express')
const router=express.Router();
const { auth } = require('../middlewares/auth');
const newProduct = require('../controllers/Products/newProduct');


router.post("/new",newProduct)




module.exports=router;