const router = require('express').Router()
const db = require('../../models')

router.get('/',(req,res)=>{
    db.Client.find()
    .then(clients =>{
        res.status(200).send(clients)
    })
    .catch(err =>{
        console.log(`Error in GET /clients: ${err}`)
        res.status(503).send({message: 'Database Asleep?'})
    })
})

// Create a new Client!
router.post('/',(req,res)=>{
    db.Client.create(req.body)
    .then(newClient =>{
        res.status(201).send(newClient)
    })
    .catch(err =>{
        console.log(`Error in POST /clients: ${err}`)
        if (err.name === 'ValidationError'){
            res.status(406).send({message:'Validation Error. Your Fault'})
        }
        else {
            res.status(503).send({message:'I dunno,something wrong with that DB'})
        }
    })
})

router.delete('./:id',(req,res)=>{
    db.Client.findByIdAndDelete(req.params.id)
    .then(()=>{
        res.status(200).send({message:'Delete Successful'})
    })
    .catch(err =>{
        console.log(`Error when deleting One client: ${err}`)
        res.status(503).send({message: 'Server-side error'})
    })
} )

router.get('/:id',(req,res)=>{
    db.Client.findById(req.params.id)
    .then(client =>{
        if (client){
            res.status(200).send(client)
        } else {
            res.status(404).send({message: 'Resource not Found'})
        }  
    })
    .catch(err =>{
        console.log(`error fetching One client: ${err}`)
        res.status(503).send({message: 'Service ...'})
    })
})

router.put('/:id',(req,res)=>{
    db.Client.findOneAndUpdate({
        _id: req.params.id
    }, req.body, {
        new: true // <-- Return the bounty * after * the update!
    })
    .then(updatedClient =>{
        res.status(200).send(updatedClient)
    })
    .catch(err =>{
        console.log(`error when updating a single client: ${err}`)
        res.status(503).send({message: 'Server Error'})
    })
})

// Error FIRST HANDLING
router.get('/errorFirst', (req,res)=>{
    db.Client.find({},(err,clients)=>{
        if (err) res.status(503).send({message:'DB sleepy?'})
        res.status(200).send(clients)
    })
})

module.exports = router