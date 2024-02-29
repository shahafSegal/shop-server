const { UsersModel } = require("../../models/users.model");
const { genTokenUser } = require("../../utils/jwt");
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
        res.status(400).send({message:"error accured"})
    }
}
const changeUserSetting=async(req,res)=>{
    const UserID=req.user.id;
    const UserRole=req.user.role;
    try{
        if((UserRole=="customer")||(UserRole=="seller"))
        {
            const CurrUser= await UsersModel.findByIdAndUpdate(UserID,{userSetting:UserRole=="customer"?"seller":"customer"},{new:true})
            const token=genTokenUser(CurrUser);
            return res.status(200).send({token,user:CurrUser})
        }
        res.status(400).send({message:"user setting incorrect/admin"})
    }catch(err){
        console.log(err)
        res.status(400).send({message:"error accured"})
    }
}


module.exports={changePassword,deleteUser,changeUserSetting}