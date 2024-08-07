// import mongoose
const mongoose = require ('mongoose')

const orderSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    email:{
        type:String
    },

    phoneNumber:{
        type:String,
        required:true
    }
})