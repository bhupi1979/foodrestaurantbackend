const exp=require("express")
const reportdata = require("../../Controllers/web/Reportcontroller")


const Reportroute=exp.Router()
Reportroute.post("/reportdata",reportdata)

module.exports=Reportroute