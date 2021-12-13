// Write your "actions" router here!
const express = require('express')

const Action = require('./actions-model')
const router = express.Router ()

router.get('/',(req,res)=>{
    Action.get()
    .then(actions => {
        res.json(actions)
    })
    .catch(err => {
        res.status()
    }
        )
})

router.get('/:id',(req,res)=>{
    Action.get(req.params.id)
    .then (stuff => {
        if (stuff) {
            res.status(200).json(stuff)
        } else {
            res.status(404).json()
        }

    })
})

router.post('/',(req,res)=>{

})

router.put('/:id',(req,res)=>{

})

router.delete('/:id',(req,res)=>{

})


module.exports = router