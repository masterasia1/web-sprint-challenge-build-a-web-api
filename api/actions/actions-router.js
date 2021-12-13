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

router.post('/', async (req,res)=>{
    try{
        const {notes,description, project_id} = await  Action.insert(req.body)
        if (!notes || !description || project_id) {
            res.status(400).json()
        } else {
            res.json(notes,description, project_id)
        }
      }
          catch (err) {
              res.status(400).json()
          }
})

router.put('/:id',(req,res)=>{

})

router.delete('/:id',(req,res)=>{
    Action.delete(req.params.id)
    .then(() => {
        res.status(200).json()
    })
    .catch (err => {
        res.status(500)
    })

})


module.exports = router