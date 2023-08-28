const inquirer = require('inquirer');
const mysql = require('mysql2');
require('dotenv').config();

const dbConnection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

const connectPromise = promisify(dbConnection.connect).bind(dbConnection);

async function connectToDatabase() {
    try {
        await connectPromise();
        console.log('Connected to the database');
        mainMenu();
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

// Choose all departments:
// job title, role ID, department, salary

// Choose View All Roles: job title, role id, dept role belongs to, salary

// Choose View All Employees
// formatted table showing employee data including emp ID, first name, last name, job title, departments, salaries, and managers

// Choose Add a Department, then prompted tp enter a name, salary, and department for the role and it's added to DB

// Choose add an employee, prompted to enter employee's first name, last name, role, and manager

// Choose update an employee role, thenprompted to select an employee to update their new role and this info is updated in the DB
      
const addDepartment = [ 
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
function handleViewAllDepartments() {
     // query is block-scoped in each function so there should be no conflicts
    console.log("Viewing all departments");

    const query = "SELECT * FROM departments";
    dbConnection.query(query, (err, results) => {
        if (err) {
            console.error("Error retrieving departments:", err);
        } else {
            console.table(results);
        }
        mainMenu();
    });
}

function handleViewAllRoles() {
    console.log("Viewing all roles");

    const query = "SELECT * FROM roles";
    dbConnection.query(query, (err, results) => {
        if (err) {
            console.error("Error retrieving roles:", err);
        } else {
            console.table(results);
        }
        mainMenu();
    });
}

function handleViewAllEmployees() {
    const query = "SELECT * FROM employees";
    dbConnection.query(query, (err, results) => {
        if (err) {
            console.error("Error retrieving employees:", err);
        } else {
            console.table(results);
        }
        mainMenu();
    });
}

function handleAddDepartment() {
    console.log("Add a department");

    const query = "SELECT * FROM departments";
    dbConnection.query(query, (err, results) => {
        if (err) {
            console.error("Error retrieving departments:", err);
        } else {
            console.table(results);
        }
        mainMenu();
    });
}

function handleAddRole() {
    
    console.log("Add a role");
}

function handleAddEmployee() {
    
    console.log("Add an employee");
}

function handleUpdateEmployeeRole() {
    
    console.log("Update an employee role");
}

// Function to handle the main menu
async function mainMenu() {
    try {
        const answers = await inquirer.prompt(questions);
        const selectedOption = answers.options;

        switch (selectedOption) {
            case "View all departments":
                handleViewAllDepartments();
                break;
            case "View all roles":
                handleViewAllRoles();
                break;
            case "View all employees":
                handleViewAllEmployees();
                break;
            case "Add a department":
                handleAddDepartment();
                break;
            case "Add a role":
                handleAddRole();
                break;
            case "Add an employee":
                handleAddEmployee();
                break;
            case "Update an employee role":
                handleUpdateEmployeeRole();
                break;
            default:
                console.log("Invalid option selected.");
        }
    } catch (err) {
        console.error("an error occurred:", err);
    }
}

mainMenu();
connectToDatabase();