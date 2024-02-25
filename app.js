const express= require('express')
const userRouter=require('./routes/users.routes')
const productRouter=require("./routes/products.routes")
const listingsRouter=require('./routes/listings.routes')
const cors=require('cors')


const app=express()
app.use(express.json())
app.use(cors())

app.use('/shop-s-mart/users',userRouter)
app.use('/shop-s-mart/products',productRouter)
app.use('/shop-s-mart/listings',listingsRouter)

module.exports={app};