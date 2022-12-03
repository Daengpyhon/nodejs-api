 const mongoose = require('mongoose')
const PersonSchema =  new mongoose.Schema({
  name : {
    type: String,
    text: true
  },
  age : {
    type: Number
  },
  position: {
  type : String
  },
  salary : {
    type: Number
  },
  image :{
    type : String
  }
},
{timestamps : true}
)

module.exports = Persons = mongoose.model('persons', PersonSchema)