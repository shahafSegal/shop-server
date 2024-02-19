const { UsersModel } = require("../../models/users.model");

const registerUser= async(req,res)=>{
    const body=req.body;
    try{
        const knownUser=await UsersModel.findOne({email:body.email})
    }catch(err){
        console.log(err)
        res.status(400).send({message:"error accured"})
    }

}

module.exports= {registerUser}