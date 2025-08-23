const exp=require("express")
const userinsert = require("../../Controllers/web/Registercontroller")
const userlogin = require("../../Controllers/web/Logincontroller")
const userroute=exp.Router()
userroute.post("/userinsert",userinsert)
userroute.post("/userlogin",userlogin)
module.exports=userroute