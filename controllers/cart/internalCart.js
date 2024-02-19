const Cart = require("../../models/cart.model")

const newCart= async (userId)=>{
    try{
        const existingCart= await Cart.findOne({userId})
        if(existingCart){
            return existingCart;
        }
        const newCart= new Cart({userId})
        await newCart.save()
        return newCart
    }catch(err){
        console.log(err)
    }
    return null
}
const deleteCart=async(cartId)=>{
    try{
        const newCart= await Cart.findByIdAndDelete(cartId)
        return newCart
    }catch(err){
        console.log(err)
    }
    return null    
}

module.exports={deleteCart,newCart}
