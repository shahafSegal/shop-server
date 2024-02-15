const mongoose=require("mongoose")

const UsersSchema=new mongoose.Schema({
    fullname:{type:String, required:true},
    password:{type:String, required:true},
    email:{type:String, required:true},
    salt:{type:String,required:true},
    userSetting:{type:String,required:true},
    savedProducts:{type:Array,required:true,default:[]}
})

const UsersModel=mongoose.model('users',UsersSchema)

module.exports={UsersModel}