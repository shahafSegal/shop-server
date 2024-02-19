const Listing = require("../../models/listing.model");
const Product = require("../../models/products.model");
const { UsersModel } = require("../../models/users.model");


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
    const body=req.body;
    const {listingId}=req.params;
    try {
      
        const existingListing= await Listing.findByIdAndDelete(listingId)
        if(!existingListing){
            return res.status(500).send(`product ${listingId} not found`);
        }
        const existingProduct= await Product.findById(existingListing.productID);
        
        existingProduct.listings=existingProduct.listings.filter((currListing)=>{return req.listingId!=currListing})
        await existingProduct.save()
        req.listingId=newListing._id;
        res.status(200).send(existingListing)
    }  catch (error) {
        console.error(error);
        res.status(500).send({message:'Server Error'});
    }
}




module.exports ={createListing,userAddListing}