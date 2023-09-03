const inquirer = require('inquirer');
const mysql = require('mysql2');
const { promisify } = require('util');
require('dotenv').config();

const dbConnection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

const connectPromise = promisify(dbConnection.connect).bind(dbConnection);

function connectToDatabase() {
    try {
        connectPromise();
        console.log('Connected to the database');

    } catch (err) {
        console.error('Error connecting to database:', err);
    }
}

const questions = [
    {
        name: "options",
        type: "list",
        message: "Choose an option",
        choices: [
            "View all departments",
            "View all roles",
            "View all employees",
            "Add a department",
            "Add a role",
            "Add an employee",
            "Update an employee role",
        ]
    },
];

// Function to handle the "View all departments" case
async function handleViewAllDepartments() {
     // query is block-scoped in each function so there should be no conflicts
    console.log("Viewing all departments");

    try {
        const query = "SELECT * FROM departments";
        const [results] = await dbConnection.promise().query(query);
        console.table(results);
    } catch (err) {
        console.error("Error retrieving departments:", err);
    }
    mainMenu();
}

async function handleViewAllRoles() {
    // query is block-scoped in each function so there should be no conflicts
   console.log("Viewing all roles");

   try {
       const query = "SELECT * FROM roles";
       const [results] = await dbConnection.promise().query(query);
       console.table(results);
   } catch (err) {
       console.error("Error retrieving roles:", err);
   }
   mainMenu();
}

async function handleViewAllEmployees() {
    // query is block-scoped in each function so there should be no conflicts
   console.log("Viewing all employees");

   try {
       const query = "SELECT * FROM employees";
       const [results] = await dbConnection.promise().query(query);
       console.table(results);
   } catch (err) {
       console.error("Error retrieving employees:", err);
   }
   mainMenu();
}

async function handleAddDepartment() {
    try {
        const answers = await inquirer.prompt([{
            name: "departmentName",
            type: "input",
            message: "Enter the name of the new department:",
        }]);
        
        const departmentName = answers.departmentName;

        const query = "INSERT INTO departments (name) VALUES (?)";
        await dbConnection.promise().query(query, [departmentName]);

        console.log(`Added new department: ${departmentName}`);
    } catch (err) {
        console.error("Error adding department:", err);
    }
    mainMenu();
}

async function handleAddRole() {
    try {
        const answers = await inquirer.prompt([{
            name: "text",
            type: "input",
            message: "Add a role",
        }]);

        const addRole = answers.addRole;

        const query = "INSERT INTO roles (title) VALUES (?)";
        await dbConnection.promise().query(query, [addRole]);

        console.log(`Added role: ${addRole}`);
    } catch (err) {
        console.error("Error adding role:", err);
    }
    mainMenu();
}

async function handleAddEmployee() {
    try {
        console.log("Add an employee");

        const answers = await inquirer.prompt([
        {
            name: "firstName",
            type: "input",
            message: "Add employee's first name",
        },
        {
            name: "lastName",
            type: "input",
            message: "Add employee's last name",
        },
        {
            name: "salary",
            type: "input",
            message: "Add employee's salary",
            validate: (value) => {
                if (isNaN(value) || parseFloat(value) <= 0) {
                    return "Please enter a valid positive number for salary.";
                }
                return true;
            },
        },
        {
            name: "role",
            type: "input",
            message: "Add employee's role",
        },
        {
            name: "manager",
            type: "input",
            message: "Add employee's manager",
        }
    ])

    const { firstName, lastName, salary } = answers;

    console.log("===================>");
    console.log("Employee Details:");
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Salary:", salary);
    console.log("Role:", answers.role);
    console.log("Manager:", answers.manager);
    console.log("===================>");

    console.log("Employee added successfully.");
} catch (err) {
    console.error("Error adding employee:", err);
    }
}

async function updateEmployeeRole(firstName, lastName, newRole) {
    try {
      
      const query = "UPDATE employees SET role_id = (SELECT id FROM roles WHERE title = ?) WHERE first_name = ? AND last_name = ?";
      const [result] = await dbConnection.promise().query(query, [firstName, lastName, newRole]);
      
      if (result.affectedRows > 0) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.error("Error updating employee role:", err);
      return false;
    }
  }

async function handleUpdateEmployeeRole() {
    try {
      console.log("Update an employee's role");
  
      const answers = await inquirer.prompt([
        {
          name: "firstName",
          type: "input",
          message: "Enter the employee's first name whose role you want to update:",
        },
        {
            name: "lastName",
            type: "input",
            message: "Enter the employee's last name whose role you want to update:",
          },
        {
          name: "newRole",
          type: "input",
          message: "Enter the new role for the employee:",
        },
      ]);
  
      const { firstName, lastName, newRole } = answers;
  
      const updatedEmployee = await updateEmployeeRole(firstName, lastName, newRole);
  
      if (updatedEmployee) {
        console.log("===================>");
        console.log(`Updated employee's role for ${firstName}  ${lastName} to ${newRole}`);
        console.log("===================>");
      } else {
        console.log("===================>");
        console.log(`Employee ${firstName} ${lastName} not found.`);
        console.log("===================>");
      }
    } catch (err) {
      console.error("Error updating employee role:", err);
    }
  }

// Function to handle the main menu
async function mainMenu() {
    try {
        const answers = await inquirer.prompt(questions);
        const selectedOption = answers.options;

        switch (selectedOption) {
            case "View all departments":
                await handleViewAllDepartments();
                break;
            case "View all roles":
                await handleViewAllRoles();
                break;
            case "View all employees":
                await handleViewAllEmployees();
                break;
            case "Add a department":
                await handleAddDepartment();
                break;
            case "Add a role":
                await handleAddRole();
                break;
            case "Add an employee":
                await handleAddEmployee();
                break;
            case "Update an employee role":
                await handleUpdateEmployeeRole();
                break;
            default:
                console.log("Invalid option selected.");
        }
    } catch (err) {
        console.error("an error occurred:", err);
    }
}

connectToDatabase();
mainMenu();