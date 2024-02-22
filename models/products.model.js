const mongoose=require("mongoose")

const productSchema=new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    tags:[{type:String,required:true}],
    listings:[{type:mongoose.Types.ObjectId,required:true,ref:"listings"}],
    min_price:{type: Number,
        required:true,
        default:0
    },
    max_price:{type: Number,
        required:true,
        default:0
    }
})

const Product=mongoose.model('products',productSchema)

module.exports=Product