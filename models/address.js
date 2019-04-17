const mongoose = require('mongoose');
const { Schema } = mongoose;
const addressSchema=new Schema(
    {
          doorNumber: {
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
          }
    });

    module.exports = mongoose.model("Address", addressSchema);