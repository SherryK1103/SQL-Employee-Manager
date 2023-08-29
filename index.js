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


const addRole = [ 
    {
        name: "text",
        type: "input",
        message: "Enter three characters",
    },

    {
        name: "text_color",
        type: "input",
        message: "Insert a color for text",
    },

    {
        name: "shapes",
        type: "list",
        message: "Choose a shape for your logo",
        choices: [
            "Circle",
            "Square",
            "Triangle",
        ]
    },

    {
        name: "shapes_color",
        type: "input",
        message: "Enter a shape color",
    },
];

const addEmployee = [ 
    {
        name: "text",
        type: "input",
        message: "Enter three characters",
    },

    {
        name: "text_color",
        type: "input",
        message: "Insert a color for text",
    },

    {
        name: "shapes",
        type: "list",
        message: "Choose a shape for your logo",
        choices: [
            "Circle",
            "Square",
            "Triangle",
        ]
    },

    {
        name: "shapes_color",
        type: "input",
        message: "Enter a shape color",
    },
];

const updateEmployeeRole = [ 
    {
        name: "text",
        type: "input",
        message: "Enter three characters",
    },

    {
        name: "text_color",
        type: "input",
        message: "Insert a color for text",
    },

    {
        name: "shapes",
        type: "list",
        message: "Choose a shape for your logo",
        choices: [
            "Circle",
            "Square",
            "Triangle",
        ]
    },

    {
        name: "shapes_color",
        type: "input",
        message: "Enter a shape color",
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
    const answers = await inquirer.prompt([{
        name: "text",
        type: "input",
        message: "Add a role",
        }]
    );
    console.log(answers.text);
    console.log("Add a role");

}

async function handleAddEmployee() {
    const answers = await inquirer.prompt([{
        name: "text",
        type: "input",
        message: "Add an employee",
        }]
    );
    console.log(answers.text);
    console.log("Add an employee");
}

async function handleUpdateEmployeeRole() {
    
    console.log("Update an employee role");
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