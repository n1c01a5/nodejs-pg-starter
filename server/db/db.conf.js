const { Pool, Client } = require('pg')
const path = require('path')


const env = process.env.NODE_ENV || 'development'
if (env === 'development') {
  require('dotenv').config({ path: path.join(__dirname, './pg.env') })
}

const user = process.env.POSTGRES_USER
const password = process.env.POSTGRES_PASSWORD
const host = process.env.POSTGRES_HOST
const port = process.env.POSTGRES_PORT
const database = process.env.POSTGRES_DATABASE

const connection = `postgresql://${user}:${password}@${host}:${port}/${database}`

const pool = new Pool({
  connectionString: connection,
})

const client = new Client({
  connectionString: connection,
})

client.connect()

module.exports = { pool, client }
