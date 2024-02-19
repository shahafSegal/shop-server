const { UsersModel } = require("../../models/users.model");
const { genTokenUser } = require("../../utils/jwt");
const { newCart } = require("../cart/internalCart");
const { encryptWithNewSalt } = require("./encryption");

const registerUser= async(req,res)=>{
    const body=req.body;
    try{
        const knownUser=await UsersModel.findOne({email:body.email})
        if(knownUser)return res.send("email already in use")
        if (body.password.length<7)return res.send("invalid password")
        const [salt,password]=encryptWithNewSalt(body.password)
        const user=new UsersModel({...body,salt,password,userSetting:"customer"})
        const userCart=newCart(user._id)
        await user.save();
        const token=genTokenUser(user);
        res.status(200).send({user,token})
    }catch(err){
        console.log(err)
        res.status(400).send({message:"error accured"})
    }

}

module.exports= {registerUser}