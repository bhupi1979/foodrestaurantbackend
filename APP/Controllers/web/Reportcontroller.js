const Cartoperation = require("../../Models/web/Cartoperationmodel")

let reportdata= async(req,res)=>{
     console.log("Reportdata Controller Called:", req.body);
    let {startdate,enddate}=req.body
await Cartoperation.find({
    updatedAt:{
        $gte:new Date(startdate+"T00:00:00.000Z"),
        $lte: new Date(enddate+"T23:59:59.999Z")
    }
}).then((response)=>{
    console.log(response)
res.send({status:1,msg:"data found successfully",data:response})
}).catch((err)=>{
res.send({status:0,msg:"no data found successfully",data:err})
})
}
module.exports=reportdata