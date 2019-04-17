const mongoose = require('mongoose');
const { Schema } = mongoose;

// const servicesSchema=new Schema({
//     serviceId: {
//         type: Schema.Types.ObjectId,
//         ref: 'servicesCategory'
//     }

// })


const TherapistSchema = new Schema({
    TherapistEmail:{
        type:String,
      //  required:true,
        unique:true
    },
    TherapistName:{
        type:String,
       // required:true
    },
   
    TherapistPhoneNo:{
        type:String,
        default:null
    },
    TherapistAddress:{
        type: Schema.Types.ObjectId, 
        ref: 'Address' 
    },
    TherapistServices:
        [{type:String}],
    
    TherapistTimeSlot:[
        {
        type:Date
        }
    ]                                                                                                                              

});
//creating the collection users
module.exports = mongoose.model("Therapist", TherapistSchema);