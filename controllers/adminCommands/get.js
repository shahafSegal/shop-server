const {Listing} = require("../../models/listing.model");

const getListing=async(req,res)=>{
    try {
        const query=req.query;
        const currListing=await UsersModel.findOne({...req.body})
        if(query.include){
            await currListing.populate("productID")
        }
        res.send(currListing)
    } catch (error) {
        console.log(error)
        res.status(400).send({message:"error accured"})
    }
        
}