const mongoose=require("mongoose")

const CartSchema=new mongoose.Schema({
    userId:{type:mongoose.Types.ObjectId,required:true,ref:'users' ,unique:true},
    savedPurchase:[
        {
            listingID:{type:mongoose.Types.ObjectId,required:true,ref:'listings'}
            ,amount:{
                type: Number,
                integer: true,
                required:true,
                default:0
            }
    }]
})

const Cart=mongoose.model('carts',CartSchema)
module.exports=Cart;

