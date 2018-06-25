require("dotenv").config();

module.exports= 
{
  "development": {
    "username": "root",
    "password": process.env.MySQL_Database_Password,
    "database": "butteredPopcorn_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": process.env.MySQL_Database_Password,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  // this will have to change for heroku deployment
  "production": {
    "username": "root",
    "password": process.env.MySQL_Database_Password,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
