const Product = require("../../models/products.model")

const newProduct= async(req,res)=>{
    try{
        const prod= req.body
        const product= await Product.create({...prod,listing:[]})
        res.status(200).send({product})
    }catch(err){
        console.log(err)
        res.status(400).send({message:"error accured"})
    }
}

module.exports=newProduct
