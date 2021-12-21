import express from 'express'
import logger from 'morgan'
import bodyParser from 'body-parser'
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from '../database'

const app = express()

// Log requests to the console.
app.use(logger('dev'))

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/api', (_, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/api/users', getUsers)
app.get('/api/users/:id', getUserById)
app.post('/api/users', createUser)
app.put('/api/users/:id', updateUser)
app.delete('/api/users/:id', deleteUser)

module.exports = app
