const Product = require("../../models/products.model")

const searchProduct= async(req,res)=>{
    try{
        const {name,tags,tagFilter}=req.query
        console.log(req.query)
        const queryObj={}
        if (name){
            queryObj.name={ $regex: new RegExp(name, 'i') }
        }

        if(tags){
            const tagsArr=tags.split(',')
            switch(tagFilter){
                case 'all':
                    queryObj.tags={$all:tagsArr}
                    break;
                case 'exclude':
                    queryObj.tags={$nin:tagsArr}
                    break;
                case 'in':
                default:
                    queryObj.tags={$in:tagsArr}
            }
        }

        const products= await Product.find(queryObj)
        res.status(200).send({products})
    }catch(err){
        console.log(err)
        res.status(400).send({message:"error accured"})
    }
}

module.exports=searchProduct
