import  mongoose from 'mongoose';

const otheritemsSchema = new mongoose.Schema({
  gmail:{
    type:String,
    required:true,
  },
  name: {
    type: String,
    required: true,
  },
  number:{
    type:Number,
    required:true,
   },
  company:{
    type: String,
    required: true,
  },
  
  price: {
    type: Number,
    required: true,
  },
  
  reason: {
    type: String,
    required: true,
  },
  
  image:{
    type:String,
    required:true
  }
   
});

export default mongoose.model('Shema', otheritemsSchema );
