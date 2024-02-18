const mongoose=require("mongoose")

const UsersSchema=new mongoose.Schema({
    fullname:{type:String, required:true},
    password:{type:String, required:true},
    email:{type:String, required:true,unique:true},
    salt:{type:String,required:true},
    userSetting:{type:String,required:true, default:"customer"},
    //array of {productID:objectId,listingID:objectId}
    userListing:[{type:mongoose.Types.ObjectId,required:true,ref:"listings"}],
    //array of objectId representing 
    savedProducts:[{type:mongoose.Types.ObjectId,required:true,ref:"products"}],
    
    userCart:{type:mongoose.Types.ObjectId,required:false,ref:"carts"}
})

const UsersModel=mongoose.model('users',UsersSchema)

module.exports={UsersModel}