const express=require('express')
const router=express.Router();
const { auth } = require('../middlewares/auth');
const newProduct = require('../controllers/Products/newProduct');
const searchProduct = require('../controllers/Products/searchProduct');


router.post("/new",auth,newProduct)
router.get("/search",auth,searchProduct)

module.exports=router;