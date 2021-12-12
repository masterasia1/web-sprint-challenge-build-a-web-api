// Write your "projects" router here!

const express = require('express')

const Project = require('./projects-model')
const router = express.Router ()



router.get('/',(req,res)=>{
Project.get()
.then(projects => {
    res.json(projects)
})
.catch(err => {
    res.status()
}
    )
})



router.get('/:id',(req,res)=>{
    Project.get(req.params.id)
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

router.get('/:id/actions',(req,res)=>{

})

module.exports = router 