const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  host: process.env.HOST_DB,
  port: process.env.HOST_PORT,
  user: process.env.USER_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.DATABASE,
};
