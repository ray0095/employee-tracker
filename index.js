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

connection.connect((err) => {
  if (err) throw err;
  runPrompts();
});

const runPrompts = () => {
  inquirer
    .prompt({
      name: 'action',
      type: 'rawlist',
      message: 'What would you like to do?',
      choices: [
        'Add a department, role, or employee',
        'View departments, roles, or employees',
        'Update employee roles',
        'EXIT',
      ],
    })
    .then((answer) => {
      switch (answer.action) {
        case 'Add a department, role, or employee':
          addDRE();
          break;

        case 'View departments, roles, or employees':
          viewDRE();
          break;

        case 'Update employee roles':
          updateEmployee();
          break;

        default:
          console.log(`Invalid action: ${answer.action}`);
          break;
      }
    });
};

const addDRE = () => {
  inquirer
    .prompt({
      name: 'action',
      type: 'rawlist',
      message: 'Which would you like to add?',
      choices: [
        'a new Department',
        'a new Role',
        'a new Employee',
        'EXIT',
      ],
    })
    .then((answer) => {
      switch (answer.action) {
        case 'a new Department':
          addDepartment();
          break;

        case 'a new Role':
          addRole();
          break;

        case 'a new Employee':
          addEmployee();
          break;

        default:
          console.log(`Invalid action: ${answer.action}`);
          break;
      }
    });
};

const addDepartment = () => {
  inquirer
  .prompt(
          {
              name: 'department',
              input: 'input',
              message: "What is the name of the department you'd like to add?"
          }).then((answer) => {
            console.log('Adding new department...\n');
            connection.query(
              'INSERT INTO department SET ?',
              {name: answer.department},
              (err, res) => {
                if (err) throw err;
                console.log(`${res.affectedRows} item added!\n`);
                runPrompts();
              }
            )
          })
};

const addRole = () => {

};

const addEmployee = () => {

};

const viewDRE = () => {

};

const updateEmployee = () => {

};