const { UsersModel } = require("../../models/users.model");
const { encryptWithNewSalt } = require("./encryption");

const changePassword=async (req,res)=>{
    const UserID=req.userId;
    try {
        const newPassword=req.body.password;
        const [salt,password]=encryptWithNewSalt(newPassword)
        const newUser= await UsersModel.findByIdAndUpdate(UserID,{salt,password},{new:true})
        res.status(200).send(newUser)
        
    } catch (error) {
        console.log(error)
        res.status(400).send({message:"error accured"})
    }
}

const deleteUser=async (req,res)=>{
    const UserID=req.userId;
    try{
        const deletMes= await UsersModel.findByIdAndDelete(UserID)
        res.send({message:deletMes?'deleted succesfully':'not found'})
    }catch(err){
        console.log(err)
        res.status(400).send("error accured")
    }
}


module.exports={changePassword,deleteUser}