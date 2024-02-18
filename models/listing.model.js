const mongoose=require("mongoose")

const ListingSchema=new mongoose.Schema({
    company:{type:String,required:true},
    price:{type:String,required:true},
    link:{type:String,required:true},
    sightings:{
        type: Number,
        integer: true,
        required:true,
        default:0
    },
    redirects:{
        type: Number,
        integer: true,
        required:true,
        default:0
    },
    productID:{type:mongoose.Types.ObjectId,required:true,ref:"products"},
    availableAmount:{
        type: Number,
        integer: true,
        required:true,
        default:0
    }
})

const Listing=mongoose.model('listings',ListingSchema)

module.exports={Listing}