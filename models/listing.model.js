const mongoose=require("mongoose")

const ListingSchema=new mongoose.Schema({
    company:{type:String,required:true},
    price:{type:String,required:true},
    totalAmount:{type:String,required:true}
})

const Listing=mongoose.model('listing',ListingSchema)

module.exports={UsersModel}