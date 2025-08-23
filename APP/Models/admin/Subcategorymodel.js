let mngs=require('mongoose')
const userSchema = mngs.Schema({
  subcategoryname:{
    type:String,
    unique:true
  },
  price:{
    type:Number,
    require:true
  },
  Maincategoryid:{
    type:String,
    require:true
  }

},  {timestamps:true})
let Subcategorymodel=mngs.model('subcategorytable',userSchema)
module.exports=Subcategorymodel