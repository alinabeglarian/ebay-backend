const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./db')
const Advertisement = require('./advertisement/model')
const advertisementRouter = require('./advertisement/router')


const app = express()
const jsonParser = bodyParser.json()

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Listening on: ${port}`))

app.use(cors())
app.use(jsonParser)
app.use(advertisementRouter)
