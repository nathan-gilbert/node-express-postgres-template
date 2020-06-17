const Pool = require("pg").Pool;
const pool = new Pool({
  user: "",
  host: "localhost",
  database: "node-demo",
  password: "",
  port: 5432,
});
