const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/clients')

mongoose.connection.once('connected',()=>{
    console.log('MongoDB Connected!')
})

mongoose.connection.on('error',(err)=>{
    console.log(`Database Error: ${err}`)
})

const Client = require('./models/client')

// Client.create({name:'Elyssa',procedure:'Grillifier',price: 350},(err,client)=>{
//     if (err) return console.log(err)
//     console.log(client)
//     process.exit()
// })

// Client.find({},(err,users)=>{
//     if (err) return console.log(err)
//     console.log(users)
//     process.exit()
// })