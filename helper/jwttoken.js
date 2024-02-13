let jwt=require("jsonwebtoken");
let jwttoken=(userId)=>{
    return jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:"1 day"});
}

module.exports=jwttoken;