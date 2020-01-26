const express = require('express')
const { connect } = require('mongoose')
const { resolve } = require('path')
require('dotenv/config')

const port = process.env.PORT || 3333
const dbUrl = process.env.MONGO_URL
const routes = require('./routes')

const app = express()
connect(dbUrl, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true
})
app.use(express.json())

app.use('/files', express.static(resolve(__dirname, '..', 'tmp')))

app.use(routes)

app.listen(port, () => console.log(`Port ${port} is open...`))
