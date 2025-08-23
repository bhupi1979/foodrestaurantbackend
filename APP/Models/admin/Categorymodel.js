let mngs=require('mongoose')
const userSchema = mngs.Schema({
  categoryname:{
    type:String,
    unique:true
  }

},  {timestamps:true})
let Maincategorymodel=mngs.model('categorytable',userSchema)
module.exports=Maincategorymodel