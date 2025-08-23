const LoginRegister = require("../../Models/web/Registermodel")
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
require('dotenv').config()
let userlogin= async(req,res)=>{
    let{username,password}=req.body
    await LoginRegister.findOne({username}).then( async(response)=>{
 console.log(response)
// console.log(response.username)
if(response==null)
{
  return res.send({status:0,msg:"user name does not match"})
}
else{
  const isMatch= await bcrypt.compare(password,response.password)
  if(!isMatch) return res.send({status:0,msg:'password does not match'})
    const token = jwt.sign({ id: response._id }, process.env.SK, { expiresIn: "600" })
   res.send({status:1,msg:"Data login successfuly",token,name1:response.username,logintime:response.createdAt})

}
//  if(response.username){
//   
//  }
//  if(!isMatch) return res.send({status:0,msg:'password does not match'})
  // const token = jwt.sign({ id: ss._id }, process.env.SK, { expiresIn: "1h" })
  //  res.send({status:1,msg:"Data login successfuly",token})
    }).catch((err)=>{
  console.log(err)
  res.send({status:0,msg:"data did not Match ",Error:err})
    })
  //  if(ss!=null||ss!=""||ss!=undefined||ss!={})
  //  {
  //   //res.send({status:1,data:ss})
  //   console.log(ss.password)
  //   const isMatch = await bcrypt.compare(password, ss.password)
  //   if (!isMatch) {
  //     return res.send({status:0, message: "Invalid password" })
  //   }

  //   // Generate token
  //   const token = jwt.sign({ id: ss._id }, process.env.SK, { expiresIn: "1h" })
  //   res.send({status:1,msg:"Data login successfuly",token})
  //  }
  //  else{
  //   return res.send({status:0,msg:"Invalid user name"})
  //  }
}
    

module.exports=userlogin