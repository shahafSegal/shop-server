const Product = require("../../models/products.model")

const searchProduct= async(req,res)=>{
    try{
        const {name,tags,tagFilter,price}=req.query
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
                case "fully":
                    queryObj.tags={$all:tagsArr,$size:tagsArr.length}
                    break;
                case 'exclude':
                    queryObj.tags={$nin:tagsArr}
                    break;
                case 'in':
                default:
                    queryObj.tags={$in:tagsArr}
            }
        }
        if(price){
            const priceValue = parseFloat(price); // Convert string to number
            queryObj.$and = [
                { min_value: { $lte: priceValue } },
                { max_value: { $gte: priceValue } }
            ];
                
        }
        console.log(queryObj)

        const products= await Product.find(queryObj)
        res.status(200).send({products})
    }catch(err){
        console.log(err)
        res.status(400).send({message:"error accured"})
    }
}

module.exports=searchProduct
