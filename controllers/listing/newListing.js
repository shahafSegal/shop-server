const Listing = require("../../models/listing.model");
const Product = require("../../models/products.model");
const { UsersModel } = require("../../models/users.model");
const updateProductPrice = require("../Products/UpdatePrices");

//gets in params productID
//gets in body the new listing
//create the listing and add ,product and the listing

const createListing=async (req,res,next)=>{
    const body=req.body;
    try {
        const {productID}=req.params;
        const existingProduct= await Product.findById(productID)
        if(!existingProduct){
            return res.status(500).send(`product ${productID} not found`);
        }
        const newListing= await new Listing({...body,productID}).save()
        existingProduct.listings.push(newListing._id);
        await existingProduct.save()
        updateProductPrice(existingProduct._id)
        req.listing=newListing
        next()
    }  catch (error) {
        console.error(error);
        res.status(500).send({message:'Server Error'});
    }
}


//add the listing from the function above to user
const userAddListing=async (req,res)=>{
    const userId=req.user.id;
    try {
        const currUser= await UsersModel.findById(userId)
        currUser.userListing.push(req.listing._id)
        await currUser.save()
        res.status(200).send({listing:req.listing});
    }  catch (error) {
        console.error(error);
        res.status(500).send({message:'Server Error'});
    }
}


module.exports ={createListing,userAddListing}