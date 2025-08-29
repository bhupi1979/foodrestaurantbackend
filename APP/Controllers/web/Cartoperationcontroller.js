const Cartoperation = require("../../Models/web/Cartoperationmodel")

let cartoperationinsert= async(req,res)=>{
    let{mode,status1,orders,username,mobilenumber,address,locality,gstnumber,paymentmode,paymentsettlement
    }=req.body
    
     
let ss= new Cartoperation({
    mode,status1,orders,username,mobilenumber,address,locality,gstnumber,paymentmode,paymentsettlement
    })
    await ss.save().then(()=>{
      //console.log('this is in add data')
        res.send({status:1,msg:"user register successfully",data:ss})
    }).catch((err)=>{
        res.send({status:0,msg:"data did not save ",Error:err})
    })
}
let cartdatabymodeandstatus= async(req,res)=>{
  let   {status1}=req.query
await Cartoperation.find({status1:status1}).then((response)=>{
res.send({status:1,msg:"data found successfully",data:response})
}).catch((err)=>{
res.send({status:0,msg:"no data found successfully",data:err})
})
}
let cartdataupdate= async(req,res)=>{
 let {id}=req.params

await Cartoperation.updateOne({_id:id},req.body).then(()=>{
  //console.log(req.body)
 res.send({status:1,msg:"data updated successfully"})
   }).catch((err)=>{
   // console.log(req.body)
 res.send({status:0,msg:"data did not save there is some error ",Error:err})
   })
   
 
  }
module.exports={cartoperationinsert,cartdatabymodeandstatus,cartdataupdate}