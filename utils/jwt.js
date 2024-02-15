const jwt=require('jsonwebtoken')
const jwtSecret= '1234054'


const genTokenUser=(userObj)=>{
    return genToken({id:userObj._id,email:userObj.email,role:"admin"})
}

const genToken=(payload)=>{
    const token=jwt.sign(
        payload,jwtSecret,
        {expiresIn:'1h'}
    )
    return token
}
const verifyToken=(token)=>{
    const payload=jwt.verify(token,jwtSecret);
    return payload
}
module.exports={genTokenUser,verifyToken}