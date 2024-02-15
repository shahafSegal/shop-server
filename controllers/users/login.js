const { UsersModel } = require("../../models/users.model");
const { genTokenUser } = require("../../utils/jwt");
const { saltEncrypt } = require("./encryption");

const loginUser=async(req,res)=>{
    try {
        const {password,email}=req.body;
        const knownUser=await UsersModel.findOne({email:email})
        if(knownUser){
            const comparePass=saltEncrypt(knownUser.salt,password)
            const correctPass=comparePass==knownUser.password
            if(correctPass){
                const token=genTokenUser(knownUser)
                return res.status(200).send({user:knownUser,token})}
        }
        res.send("incorrect credentials")
    } catch (error) {
        console.log(error)
        res.status(400).send({message:"error accured"})
    }
}

module.exports={loginUser}