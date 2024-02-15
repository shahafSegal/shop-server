const md5 = require('md5');
const crypto = require("crypto");

function saltEncrypt(salt,encryptString){
    return md5(`${encryptString}${salt}`)
}
function getSalt(){
    return crypto.randomBytes(16).toString('hex');
}
function encryptWithNewSalt(encryptStr){
    const salt=getSalt()
    const password=saltEncrypt(salt,encryptStr)
    return [salt,password]
}
module.exports={saltEncrypt,encryptWithNewSalt}