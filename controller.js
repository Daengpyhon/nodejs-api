
const Persons = require('./model')


exports.getPersons = async(req, res)=>{
  try {
    const data = await Persons.find().exec()
    res.send(data)
  } catch (error) {
    console.log(error)
    res.send("Server error")
  }
}