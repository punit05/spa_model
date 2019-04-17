const mongoose=require("mongoose");
const { Schema } = mongoose;



const SpaPanelSchema = new Schema({
   Name: { 
      type:String
      //,
      //required:true
    },
    Email:{
       type:String,
       //required:true,
       unique:true
    },
    UserName:{
       type:String,
       //required:true,
       unique:true
    },
    Password:{
       type:String
       //,
       //required:true,
       
    },
    MobileNo:{
       type:String,
       required:true,
      // unique:true
    },
    OTP:{
       type:Number,
       required:true
    },
    property: { type: mongoose.Schema.Types.ObjectId, 
      ref: 'SpaDetail' },
  
});
//creating the collection users
module.exports = mongoose.model("SignUpAdmin", SpaPanelSchema);