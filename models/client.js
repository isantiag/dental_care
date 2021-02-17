// Require mongoose
const mongoose = require('mongoose')

// Create a client schema
const clientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 64
    },
    procedure: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: 1000
    }
})

module.exports = mongoose.model('Client',clientSchema)