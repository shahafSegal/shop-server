const mongoose=require("mongoose")

const productSchema=new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    tags:{type:Array,required:true,default:[]},
    productListings:{type:Array,required:true,default:[]}
})

const Product=mongoose.model('products',productSchema)

module.exports={Product}