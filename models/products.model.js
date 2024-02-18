const mongoose=require("mongoose")

const productSchema=new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    tags:[{type:String,required:true}],
    productListings:[{type:mongoose.Types.ObjectId,required:true,ref:"listings"}]
})

const Product=mongoose.model('products',productSchema)

module.exports={Product}