const mysql = require('mysql');
const inquirer = require('inquirer');
const passFile = require('./config');
const pass = passFile;

const connection = mysql.createConnection({
  host: 'localhost',

  port: 3306,

  user: 'root',

  password: pass,
  database: 'employees_db',
});