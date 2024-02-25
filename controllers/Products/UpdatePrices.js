const Product = require("../../models/products.model")

const updateProductPrice= async(productID)=>{
    try{
        const product= await Product.findById(productID).populate("listings")
        let minPrice = 0;
        let maxPrice = 0;

        if (product.listings.length !== 0) {
            minPrice = product.listings[0].price;
            maxPrice = product.listings[0].price;

            product.listings.forEach(({ price }) => {
                if (price > maxPrice) {
                    maxPrice = price;
                } else if (price < minPrice&&price>0) {
                    minPrice = price;
                }
            });
        }
         
        product.max_price=maxPrice;
        product.min_price=minPrice;
        await product.save()
        console.log(product)

    }catch(err){
        console.log(err)
    }
}

module.exports=updateProductPrice
