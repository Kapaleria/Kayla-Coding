const express = require('express')
const mongoose = require ('mongoose')
const cors = require ('cors')
require('dotenv/config')

const routes = require('./routes')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use('/api', routes)

mongoose.connect(process.env.MONGODBLINK)
.then(()=>console.log('connected to the DB'))
.catch(err=>{console.log('encountered error', err)})

// app.listen(`${port}`)

app.listen (process.env.PORT, ()=>console.log('CONNECTED TO PORT'))