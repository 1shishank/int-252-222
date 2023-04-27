const mongoose = require ('mongoose')
const mongoDB="mongodb://127.0.0.1:27017/chatbot"
mongoose.connect(mongoDB)
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((err) => {
    console.log(`MongoDB connection error: ${err}`);
  })

const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    }
    ,
    password:{
        type:String,
        required:true
    }
    
})
const collections = mongoose.model("collections",newSchema)
module.exports=collections