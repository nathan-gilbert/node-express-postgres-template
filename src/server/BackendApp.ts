import express, { Express } from 'express'
import bodyParser from 'body-parser'
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from '../database'

class BackendApp {
  public app: Express

  constructor() {
    this.app = express()
    // this.middleware()
    this.routes()
  }

  /*
  middleware() {}
  */

  routes() {
    // Parse incoming requests data (https://github.com/expressjs/body-parser)
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({ extended: true }))

    this.app.get('/api', (_, response) => {
      console.log('Request received')
      response.json({ info: 'Node.js, Typescript, Express, and Postgres API' })
    })

    this.app.get('/api/users', getUsers)
    this.app.get('/api/users/:id', getUserById)
    this.app.post('/api/users', createUser)
    this.app.put('/api/users/:id', updateUser)
    this.app.delete('/api/users/:id', deleteUser)
  }
}

export default new BackendApp().app
