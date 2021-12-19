const config = require('config')

const { Pool } = require('pg')
const pool = new Pool({
  user: config.get('user'),
  host: config.get('host'),
  database: config.get('database'),
  password: config.get('password'),
  port: config.get('db-port'),
  max: config.get('max'),
})

function getUsers(_, response) {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

function getUserById(request, response) {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

function createUser(request, response) {
  const { name, email } = request.body

  pool.query(
    'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
    [name, email],
    (error, result) => {
      if (error) {
        throw error
      }
      response.status(201).json(result.rows)
    }
  )
}

function updateUser(request, response) {
  const id = parseInt(request.params.id)
  const { name, email } = request.body
  pool.query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *',
    [name, email, id],
    (error, result) => {
      if (error) {
        throw error
      }
      response.status(200).json(result.rows)
    }
  )
}

function deleteUser(request, response) {
  const id = parseInt(request.params.id)

  pool.query(
    'DELETE FROM users WHERE id = $1 RETURNING *',
    [id],
    (error, result) => {
      if (error) {
        throw error
      }
      response.status(200).json(result.row)
    }
  )
}

module.exports = {
  getUserById,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
}
