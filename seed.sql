USE employees_db;


INSERT INTO department (name)
VALUES ("Sales"), ("HR"), ("Operations");

INSERT INTO role (title, salary, department_id)
VALUES ("Field Sales Rep", 110000, 1), ("Sales Manager", 230000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Rachel", "Strong", 1, 2);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Sally", "Walker", 2);

