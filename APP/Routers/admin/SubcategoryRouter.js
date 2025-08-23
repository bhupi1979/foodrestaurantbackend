const exp=require("express")
const { subcategoryinsert, subcategorydata, subcategoryupdate, subcategorydelete, subcategorybyid, submaincategorydata } = require("../../Controllers/admin/Amdinsubcategorycontroller")

const subcategoryroute=exp.Router()
subcategoryroute.post("/subcategoryinsert",subcategoryinsert)
subcategoryroute.get("/subcategorydata",subcategorydata)
subcategoryroute.put("/subcategoryupdate/:id",subcategoryupdate)
subcategoryroute.delete("/subcategorydelete/:id",subcategorydelete)
subcategoryroute.get("/subcategorybyid/:id",subcategorybyid)
subcategoryroute.get("/maincategory/:id",submaincategorydata)
module.exports=subcategoryroute