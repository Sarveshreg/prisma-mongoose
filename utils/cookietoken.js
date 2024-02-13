const jwttoken = require("../helper/jwttoken")

const cookieToken=(user,res)=>{
    const token=jwttoken(user.id);
    const options={
        expires: new Date(Date.now()+3*24*60*60*1000),
        httpOnly:true
    }
    user.password="";
    res.status(200).cookie("token",token,options).json({
        success:true,
        token,
        user
    })
   
}


module.exports=cookieToken;
