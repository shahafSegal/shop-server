const { UsersModel } = require("../../models/users.model");

const getUser= async(req,res)=>{
    try{
        const knownUser=await UsersModel.findById(req.userId)
        res.status(knownUser?200:401).send({user:knownUser})
    }catch(err){
        res.status(400).send({message:"error accured"})
    }

}

module.exports= {getUser}