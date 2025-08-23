const exp=require("express")
const { categoryinsert, categorydata, categoryupdate, categorydelete, categorybyid } = require("../../Controllers/admin/Admincategorycontroller")

const categoryroute=exp.Router()
categoryroute.post("/categoryinsert",categoryinsert)
categoryroute.get("/categorydata",categorydata)
categoryroute.put("/categoryupdate/:id",categoryupdate)
categoryroute.delete("/categorydelete/:id",categorydelete)
categoryroute.get("/categorybyid/:id",categorybyid)
module.exports=categoryroute