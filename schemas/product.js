
const { default: mongoose } = require("mongoose")

let productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },price:{
        type: Number,
        required: true
    },description:{
        type: String,
        default: ''
    },quantity:{
        type: Number,
        default: 0
    },imageURL:{
        type: String,
        default: ''
    },category:{
        type: String,
       requied: true
    },
})