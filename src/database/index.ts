import { config } from 'config'
import { Pool } from 'pg'
import { StatusCodes } from 'http-status-codes'

const pool = new Pool({
  user: config.get('user'),
  host: config.get('host'),
  database: config.get('database'),
  password: config.get('password'),
  port: config.get('db-port'),
  max: config.get('max'),
})

/**
 *
 * @param _
 * @param response
 */
export function getUsers(_, response) {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(StatusCodes.OK).json(results.rows)
  })
}

/**
 *
 * @param request
 * @param response
 */
export function getUserById(request, response) {
  const id = parseInt(request.params.id, 10)

  pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(StatusCodes.OK).json(results.rows)
  })
}

/**
 *
 * @param request
 * @param response
 */
export function createUser(request, response) {
  const { name, email } = request.body

  pool.query(
    'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
    [name, email],
    (error, result) => {
      if (error) {
        throw error
      }
      response.status(StatusCodes.CREATED).json(result.rows)
    }
  )
}

/**
 *
 * @param request
 * @param response
 */
export function updateUser(request, response) {
  const id = parseInt(request.params.id, 10)
  const { name, email } = request.body
  pool.query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *',
    [name, email, id],
    (error, result) => {
      if (error) {
        throw error
      }
      response.status(StatusCodes.OK).json(result.rows)
    }
  )
}

/**
 *
 * @param request
 * @param response
 */
export function deleteUser(request, response) {
  const id = parseInt(request.params.id, 10)

  pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id], (error) => {
    if (error) {
      throw error
    }
    response.status(StatusCodes.NO_CONTENT)
  })
}
