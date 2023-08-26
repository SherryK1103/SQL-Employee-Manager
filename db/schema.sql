CREATE DATABASE EmployeeTracker_DB;

USE EmployeeTracker_DB;

CREATE TABLE
    departments (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(30) NOT NULL
    );

CREATE TABLE
    roles (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(30),
        salary DECIMAL,
        department_id INT,
        FOREIGN KEY (department_id) REFERENCES departments(id)
    );

CREATE TABLE
    employees (
        id INT AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(30) NOT NULL,
        last_name VARCHAR(30) NOT NULL,
        role_id INT,
        department_id INT,
        salary DECIMAL,
        manager_id INT,
        FOREIGN KEY (role_id) REFERENCES roles(id),
        FOREIGN KEY (department_id) REFERENCES departments(id),
        FOREIGN KEY (manager_id) REFERENCES employees(id)
    );