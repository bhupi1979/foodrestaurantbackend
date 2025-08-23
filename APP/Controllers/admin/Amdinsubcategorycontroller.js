const Subcategorymodel = require("../../Models/admin/Subcategorymodel")

let subcategoryinsert= async(req,res)=>{
    let{subcategoryname,price,Maincategoryid}=req.body

let ss= new Subcategorymodel({
    subcategoryname,
    price,
    Maincategoryid
    })
    await ss.save().then(()=>{
        res.send({status:1,msg:"user register successfully"})
    }).catch((err)=>{
        res.send({status:0,msg:"data did not save ",Error:err})
    })
}

let subcategorydata= async(req,res)=>{
await Subcategorymodel.find().then((response)=>{
res.send({status:1,msg:"data found successfully",data:response})
}).catch((err)=>{
res.send({status:0,msg:"no data found successfully",data:err})
})
}

let subcategorydelete= async(req,res)=>{
    let{id}=req.params 
     await Subcategorymodel.deleteOne({_id:id}).then((res)=>{
res.send({status:1,msg:"data deleted succesfully",data:res})
  }).catch((err)=>{
res.send({status:1,msg:"data did not deleted succesfully",data:err})
  })
}
let subcategoryupdate= async(req,res)=>{

 let {id}=req.params
// console.log(id)
    let data=await Subcategorymodel.find({_id:id})
   // console.log(data)
    if(data.length>0)
    {
await Subcategorymodel.updateOne({_id:id},req.body).then(()=>{
 res.send({status:1,msg:"data updated successfully"})
   }).catch((err)=>{
 res.send({status:0,msg:"data did not save there is some error ",Error:err})
   })
    }
    else{
         return res.send("no file to be updated")
    }
 
  }
let subcategorybyid=async(req,res)=>{
    let id=req.params.id
let ss= await Subcategorymodel.findById(id)
   if(ss!=null||ss!=""||ss!=undefined||ss!={})
   {
    res.send({status:1,data:ss})
   }
   else{
    res.send({status:0,msg:"there is no data to display"})
   }
  }
let submaincategorydata= async(req,res)=>{
  let id=req.params.id
await Subcategorymodel.find({Maincategoryid:id}).then((response)=>{
res.send({status:1,msg:"data found successfully",data:response})
}).catch((err)=>{
res.send({status:0,msg:"no data found successfully",data:err})
})
}
module.exports={subcategoryinsert,subcategorydata,subcategorydelete,subcategoryupdate,subcategorybyid,submaincategorydata}