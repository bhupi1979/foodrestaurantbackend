const LoginRegister = require("../../Models/web/Registermodel")
const bcrypt = require('bcrypt')
let userinsert= async(req,res)=>{
    let{username,password}=req.body
    
     const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
let ss= new LoginRegister({
        username,
        password:hashedPassword
    })
    await ss.save().then(()=>{
        res.send({status:1,msg:"user register successfully",name1:ss.username,logintime:ss.createdAt})
    }).catch((err)=>{
        res.send({status:0,msg:"data did not save ",Error:err})
    })
}
module.exports=userinsert