let mngs=require('mongoose')
const userSchema = mngs.Schema({
  username:{
    type:String,
    unique:true
  },
  password:{ 
    type:String,
  }

},  {timestamps:true})
let LoginRegister=mngs.model('usertable',userSchema)
module.exports=LoginRegister