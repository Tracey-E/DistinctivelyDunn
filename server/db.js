const Pool = require("pg").Pool;

// import variables from .env into memory
require("dotenv").config();

const pool = new Pool({
  user: "Admin",
  password: process.env.DB_ADMIN_PASSWORD,
  host: "localhost",
  port: 5432,
  database: "Ddunn",
});

module.exports = pool;
