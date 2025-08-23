const exp=require("express")
const { tableinsert, tabledata, tableupdate, tabledelete, tablebyid } = require("../../Controllers/admin/AdminTablecontroller")

const Tableroute=exp.Router()
Tableroute.post("/tableinsert",tableinsert)
Tableroute.get("/tabledata",tabledata)
Tableroute.put("/tableupdate/:id",tableupdate)
Tableroute.delete("/tabledelete/:id",tabledelete)
Tableroute.get("/tablebyid/:id",tablebyid)
module.exports=Tableroute