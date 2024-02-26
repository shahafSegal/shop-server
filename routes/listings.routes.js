const express=require('express')
const router=express.Router();
const { auth } = require('../middlewares/auth');
const {createListing,userAddListing} = require('../controllers/listing/newListing');
const { userRemoveListing, deleteListing } = require('../controllers/listing/deleteListing');


router.post("/new/:productID",auth,createListing,userAddListing)
router.patch("/edit/:listingId")

router.delete("/remove/:listingId",auth,userRemoveListing,deleteListing)

module.exports=router;