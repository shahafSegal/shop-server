const Listing = require("../../models/listing.model");
const Product = require("../../models/products.model");
const { UsersModel } = require("../../models/users.model");
const updateProductPrice = require("../Products/UpdatePrices");


const userRemoveListing=async (req,res,next)=>{
    const userId=req.user.id;
    const {listingId}=req.params;
    try {
        const currUser= await UsersModel.findById(userId)
        const newUserListing= currUser.userListing.filter((currListing)=>{return listingId!=currListing})
        if(currUser.userListing.length==newUserListing.length){
          return  res.status(500).send(`user doesn't have listing ${listingId}`);
        }
        currUser.userListing=newUserListing;
        await currUser.save()
        next()
    }  catch (error) {
        console.error(error);
        res.status(500).send({message:'Server Error'});
    }
}

const deleteListing=async (req,res)=>{
    const {listingId}=req.params;
    try {
      
        const existingListing= await Listing.findByIdAndDelete(listingId)
        console.log(existingListing)
        if(!existingListing){
            return res.status(500).send(`listing ${listingId} not found`);
        }
        const existingProduct= await Product.findById(existingListing.productID);
        
        existingProduct.listings=existingProduct.listings.filter((currListing)=>{return listingId!=currListing})
        await existingProduct.save()

        updateProductPrice(existingProduct._id)
        res.status(200).send(existingListing)
    }  catch (error) {
        console.error(error);
        res.status(500).send({message:'Server Error'});
    }
}




module.exports ={deleteListing,userRemoveListing}