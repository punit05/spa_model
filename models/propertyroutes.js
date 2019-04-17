const mongoose=require("mongoose");
const { Schema } = mongoose;



const SpaDetailSchema = new Schema({
   NameOfProperty: { 
      type:String
      //,
      //required:true
    },
    StarRating:{
       type:String
       //required:true,
       
    },
    ContactName:{
        type:String
    },
    PhoneNo:{
        type:String
    },
    
    AlternativeMobileNo:{
       type:String
     //  required:true,
      // unique:true
    },
    DoorNumber: {
        type: String,
        default: null
      },
      line1: {
        type: String,
        default: null
      },
      line2: {
        type: String,
        default: null
      },
      city: {
        type: String,
        default: null
      },
      state: {
        type: String,
        default: null
      },
      pincode: {
        type: String,
        default: null
      },
       GSTNumber:{
           type:String
       },
       ParkingAvailable:{
           type:Boolean,
           default:false
       },
       LanguageSpoken:[{type: String}],
       Services:[{type:String}]
       

  
});
//creating the collection users
module.exports = mongoose.model("SpaDetail", SpaDetailSchema);