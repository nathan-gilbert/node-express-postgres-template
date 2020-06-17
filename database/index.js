const config = require("config");

const Pool = require("pg").Pool;
const pool = new Pool({
  user: config.get("user"),
  host: config.get("host"),
  database: config.get("database"),
  password: config.get("password"),
  port: config.get("db-port"),
});

function getUsers(_, response) {
  return pool.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
}

function getUserById(request, response) {
  const id = parseInt(request.params.id);

  return pool.query(
    "SELECT * FROM users WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
}

exports.getUsers = getUsers;
exports.getUserById = getUserById;
