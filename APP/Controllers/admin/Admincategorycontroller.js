const Maincategorymodel = require("../../Models/admin/Categorymodel");


let categoryinsert= async(req,res)=>{
    let{categoryname}=req.body

let ss= new Maincategorymodel({
    categoryname
    })
    await ss.save().then(()=>{
        res.send({status:1,msg:"user register successfully"})
    }).catch((err)=>{
        res.send({status:0,msg:"data did not save ",Error:err})
    })
}

let categorydata= async(req,res)=>{
await Maincategorymodel.find().then((response)=>{
res.send({status:1,msg:"data found successfully",data:response})
}).catch((err)=>{
res.send({status:0,msg:"no data found successfully",data:err})
})
}

let categorydelete= async(req,res)=>{
    let{id}=req.params 
     await Maincategorymodel.deleteOne({_id:id}).then((res)=>{
res.send({status:1,msg:"data deleted succesfully",data:res})
  }).catch((err)=>{
res.send({status:1,msg:"data did not deleted succesfully",data:err})
  })
}
let categoryupdate= async(req,res)=>{

 let {id}=req.params
// console.log(id)
    let data=await Maincategorymodel.find({_id:id})
   // console.log(data)
    if(data.length>0)
    {
await Maincategorymodel.updateOne({_id:id},req.body).then(()=>{
 res.send({status:1,msg:"data updated successfully"})
   }).catch((err)=>{
 res.send({status:0,msg:"data did not save there is some error ",Error:err})
   })
    }
    else{
         return res.send("no file to be updated")
    }
 
  }
let categorybyid=async(req,res)=>{
    let id=req.params.id
let ss= await Maincategorymodel.findById(id)
   if(ss!=null||ss!=""||ss!=undefined||ss!={})
   {
    res.send({status:1,data:ss})
   }
   else{
    res.send({status:0,msg:"there is no data to display"})
   }
  }

module.exports={categoryinsert,categorydata,categorydelete,categoryupdate,categorybyid}