const Listing = require("../../models/listing.model");
const { UsersModel } = require("../../models/users.model");
const updateProductPrice = require("../Products/UpdatePrices");


const editListing=async (req,res,next)=>{
    const userId=req.user.id;
    const {listingId}=req.params;
    try {
        const {price,link,company,availableAmount}=req.body
        if(!listingId){return res.status(500).send({message:'No ID sent'}); }
        const currUser= await UsersModel.findById(userId)
        const isListingIn= currUser.userListing.includes(listingId);
        if(!(isListingIn)){
          return  res.status(500).send(`user doesn't have listing ${listingId}`);
        }
        const currListing= await Listing.findByIdAndUpdate(listingId,{price,link,company,availableAmount})
        // updateProductPrice(productID/,.)
    }  catch (error) {
        console.error(error);
        res.status(500).send({message:'Server Error'});
    }
}
const prepareUpdateFields = ({ price, link, company, availableAmount }) => {
    const updateFields = {};
  
    if (price ) {
      updateFields.price = price;
    }
  
    if (link ) {
      updateFields.link = link;
    }
  
    if (company ) {
      updateFields.company = company;
    }
  
    if (availableAmount) {
      updateFields.availableAmount = availableAmount;
    }
  
    return updateFields;
  };


module.exports =editListing