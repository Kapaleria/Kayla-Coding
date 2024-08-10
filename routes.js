const express = require('express')

const router = express.Router()

const orders = require('./schema')

//GET method
router.get ('/', (req,res)=>{
    res.json({mssg:'Hello'})
})

//POST method
router.post('/orders', (req,res)=>{
  const order = new orders({
    name:req.body.name,
    email: req.body.email,
    phoneNumber:req.body.phoneNumber
  })
  order.save()
        .then(data=>{res.json(data)})
        .catch(err=>{res.json({mss:err})})
})

//asynchronous approach

module.exports = router
