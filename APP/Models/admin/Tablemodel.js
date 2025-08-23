let mngs=require('mongoose')
const userSchema = mngs.Schema({
  tablename:{
    type:Number,
    unique:true
  },
parcelname:{
    type:Number,
    unique:true
  },
  roomname:{
    type:Number,
    unique:true
  }
},  {timestamps:true})
let Tablemodel=mngs.model('Counttable',userSchema)
module.exports=Tablemodel