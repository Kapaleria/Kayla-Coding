const express = require('express')
const mongoose = require ('mongoose')
require('dotenv/config')

const app = express()

mongoose.connect(process.env.MONGODBLINK)
.then(()=>console.log('connected to the DB'))
.catch(err=>{console.log('encountered error', err)})

// app.listen(`${port}`)

app.listen (process.env.PORT, ()=>console.log('CONNECTED TO PORT'))