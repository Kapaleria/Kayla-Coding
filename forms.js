const express = require('express')
const mongoose = require ('mongoose')

const app = express()

const port = 5000;

mongoose.connect('mongodb+srv://Irene:irene@cluster0.fumaixk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>console.log('connected to the DB'))
.catch(err=>{console.log('encountered error', err)})

// app.listen(`${port}`)

app.listen (port, ()=>console.log('CONNECTED TO PORT'))