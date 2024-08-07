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

//make new model of the schema
module.exports = mongoose.model ('orders', orderSchema)