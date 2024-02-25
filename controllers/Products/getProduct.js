const Product = require("../../models/products.model");

const getProduct= async(req,res)=>{
    try{
        const {productID}=req.params
        const knownProduct=await Product.findById(productID)?.populate('listings')
        res.status(knownProduct?200:401).send({product:knownProduct})
    }catch(err){
        res.status(400).send({message:"error accured"})
    }

}

module.exports= {getProduct}