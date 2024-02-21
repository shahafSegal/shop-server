const express= require('express')
const mongoose=require("mongoose")
const mongoUrl="mongodb://localhost:27017/shop-app"
const userRouter=require('./routes/users.routes')
const productRouter=require("./routes/products.routes")
const cors=require('cors')

mongoose.connect(mongoUrl)
    .then(()=>{
        console.log("connected to db")
    })
    .catch((error)=>{
        console.log(error)
    })

const app=express()
app.use(express.json())
app.use(cors())

app.use('/api/v1/users',userRouter)
app.use('/api/v1/products',productRouter)

module.exports={app};