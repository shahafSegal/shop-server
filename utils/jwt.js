const jwt=require('jsonwebtoken')
const jwtSecret= '1234054'


const genTokenUser=(userObj)=>{
    return genToken({id:userObj._id,email:userObj.email,role:userObj.userSetting})
}

const genToken=(payload)=>{
    const token=jwt.sign(
        payload,jwtSecret,
        {expiresIn:'6h'}
    )
    return token
}
const verifyToken=(token)=>{
    const payload=jwt.verify(token,jwtSecret);
    return payload
}
module.exports={genTokenUser,verifyToken}