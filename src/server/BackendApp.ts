import express, { Express } from 'express'
import logger from 'morgan'
import bodyParser from 'body-parser'
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from '../database'

export default class BackendApp {
  app: Express

  constructor() {
    this.app = express()
    this.middleware()
    this.routes()
  }

  middleware() {
    // Log requests to the console.
    this.app.use(logger('dev'))
  }

  routes() {
    // Parse incoming requests data (https://github.com/expressjs/body-parser)
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({ extended: true }))

    this.app.get('/api', (_, response) => {
      response.json({ info: 'Node.js, Express, and Postgres API' })
    })

    this.app.get('/api/users', getUsers)
    this.app.get('/api/users/:id', getUserById)
    this.app.post('/api/users', createUser)
    this.app.put('/api/users/:id', updateUser)
    this.app.delete('/api/users/:id', deleteUser)
  }
}
