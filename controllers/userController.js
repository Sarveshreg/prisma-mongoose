let cookieToken=require("../utils/cookietoken");
let prisma=require("../prisma/index");


//
exports.signup= async(req,res,next)=>{
try {
    const {name,email,password}=req.body;
    if(!name || !email|| !password){
        throw new Error("provide all fields")
    }
    let user= await prisma.user.create({
        data:{
            name,
            email,
            password
        }
    });
    //send user
    cookieToken(user,res);
} catch (error) {
    throw new Error(error)
}
}


exports.login=async(req,res,next)=>{
    try {
        let {email, password}=req.body;
        if(!email || ! password){
            throw new Error("please provide email and password");
        }
        let user= await prisma.user.findUnique({
            where:{
                email: email
            }
        })
        if(!user) {console.log("user not found");res.status(404).json({result:"fail"});}
        else if(user.password===password){
           cookieToken(user,res);
        }else{
        return res.status(404).json({error:"user not found"});
        }
    } catch (error) {
        throw new Error(error)
    }
}


exports.logout=async(req,res,next)=>{
    try {
        res.clearCookie("token");
        res.status(200).json({logout:true})
    } catch (error) {
        throw new Error(error);
        
    }
}