CREATE DATABASE EmployeeTracker_DB;

USE EmployeeTracker_DB;

CREATE TABLE
    departments (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL
    );

CREATE TABLE
    roles (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        salary DECIMAL(10, 2) NOT NULL,
        department_id INT,
        FOREIGN KEY (department_id) REFERENCES departments(id)
    );

CREATE TABLE
    employees (
        id INT AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL,
        role_id INT,
        department_id INT,
        salary DECIMAL(10, 2),
        manager_id INT,
        FOREIGN KEY (role_id) REFERENCES roles(id),
        FOREIGN KEY (department_id) REFERENCES departments(id),
        FOREIGN KEY (manager_id) REFERENCES employees(id)
    );