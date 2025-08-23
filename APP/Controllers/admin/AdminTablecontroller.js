const Tablemodel = require("../../Models/admin/Tablemodel")




let tableinsert= async(req,res)=>{
    let{tablename,parcelname,roomname}=req.body

let ss= new Tablemodel({
    tablename,
    parcelname,
    roomname
    })
    await ss.save().then(()=>{
        res.send({status:1,msg:"user register successfully"})
    }).catch((err)=>{
        res.send({status:0,msg:"data did not save ",Error:err})
    })
}

let tabledata= async(req,res)=>{
await Tablemodel.find().then((response)=>{
res.send({status:1,msg:"data found successfully",data:response})
}).catch((err)=>{
res.send({status:0,msg:"no data found successfully",data:err})
})
}

let tabledelete= async(req,res)=>{
    let{id}=req.params 
     await Tablemodel.deleteOne({_id:id}).then((res)=>{
res.send({status:1,msg:"data deleted succesfully",data:res})
  }).catch((err)=>{
res.send({status:1,msg:"data did not deleted succesfully",data:err})
  })
}
let tableupdate= async(req,res)=>{

 let {id}=req.params
// console.log(id)
    let data=await Tablemodel.find({_id:id})
   // console.log(data)
    if(data.length>0)
    {
await Tablemodel.updateOne({_id:id},req.body).then(()=>{
 res.send({status:1,msg:"data updated successfully"})
   }).catch((err)=>{
 res.send({status:0,msg:"data did not save there is some error ",Error:err})
   })
    }
    else{
         return res.send("no file to be updated")
    }
 
  }
let tablebyid=async(req,res)=>{
    let id=req.params.id
let ss= await Tablemodel.findById(id)
   if(ss!=null||ss!=""||ss!=undefined||ss!={})
   {
    res.send({status:1,data:ss})
   }
   else{
    res.send({status:0,msg:"there is no data to display"})
   }
  }

module.exports={tableinsert,tabledata,tabledelete,tableupdate,tablebyid}