const Cart = require("../../models/cart.model");

const updateCart=async (req,res)=>{
    const body=req.body;
    try {
        const existingCart = await Cart.findOneAndUpdate(
            {userId:body.userId},
            {savedPurchase:body.savedPurchase},
            {new:true}
            );
        res.status(200).send(existingCart);
    }  catch (error) {
        console.error(error);
        res.status(500).send({message:'Server Error'});
    }
}

module.exports =updateCart;