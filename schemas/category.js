const { default: mongoose } = require("mongoose")

let categorySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },description:{
        type: String,
        default: ''
    }
})

module.exports = mongoose.model('Category', categorySchema)