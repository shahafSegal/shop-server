const { verifyToken } = require("../utils/jwt");

const auth=(req,res,next)=>{
   
    try {
        const UsrToken=req.headers["authorization"];
        if(!UsrToken)return res.status(401).send({message:"unauthorized"})
        const token=UsrToken.split(" ")[1]
        const payload=verifyToken(token)
        if(!payload)return res.status(400).send({message:"unauthorized"})

        req.userId=payload.id
        req.user=payload
        next()
    } catch (error) {
        if(error.message.startsWith("jwt expired"))return res.status(401).send({message:"token expired"})

        return res.status(400).send({message:"ERROR ACCURED"})
    }
       
}

module.exports={auth}