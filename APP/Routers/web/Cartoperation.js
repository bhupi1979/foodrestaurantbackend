const exp=require("express")
const { cartoperationinsert, cartdatabymodeandstatus, cartdataupdate } = require("../../Controllers/web/Cartoperationcontroller")

const cartdataroute=exp.Router()
cartdataroute.post("/cartdatainsert",cartoperationinsert)
cartdataroute.get("/cartdataviewbymodeandstatus",cartdatabymodeandstatus)
cartdataroute.put("/cartdataupdate/:id",cartdataupdate)
module.exports=cartdataroute