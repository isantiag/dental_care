// Require mongoose
const mongoose = require('mongoose')

// Provide a mongo connection string
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/clients',{
    useUnifiedTopology: true,
    useNewUrlParser: true
})

// Export all of our mongoose models that we have in the models folder
module.exports.Client = require('./client')