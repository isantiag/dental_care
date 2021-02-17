// Require dependencies
const express = require('express')
const cors = require('cors')

// Create App as an instance of Express
const app = express()

// Set up middleware
app.use(express.urlencoded({extended:false})) // Accepts Form data
app.use(express.json()) // Handle data from AJAZ requests
app.use(cors()) // Allow requests from other origins

app.use('/v1/clients',require('./controllers/v1/clients'))

app.get('*',(req,res)=>{
    res.status(404).send({message:'Not Found!'})
})

app.listen(3000,()=>{console.log('App is listening on Port 3K')})