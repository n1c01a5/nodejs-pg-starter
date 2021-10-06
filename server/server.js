
const express = require('express')
const cors = require('cors')

const { pool, client } = require('./db/db.conf')

const app = express()

app.use(cors({
  // exposedHeaders: ['Authorization'],
  origin: 'http://localhost:3001',
  credentials: true
}))

app.use(express.json())

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})

client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
})

app.get('/', (req, res) => {
  res.json({ status: 200, message: "Running" })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`))
