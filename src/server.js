const express = require('express')
const { connect } = require('mongoose')
require('dotenv/config')

const port = process.env.PORT || 3333
const dbUrl = process.env.MONGO_URL
const routes = require('./routes')

const app = express()
app.use(express.json())
app.use(routes)

connect(dbUrl, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true
})

app.listen(port, () => console.log(`Port ${port} is open...`))
