// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
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

// Choose View All Employees
// formatted table showing employee data including emp ID, first name, last name, job title, departments, salaries, and managers


// Choose Add a Department, then prompted tp enter a name, salary, and department for the role and it's added to DB

// Choose add an employee, prompted to enter employee's first name, last name, role, and manager

// Choose update an employee role, thenprompted to select an employee to update their new role and this info is updated in the DB


 // do a switch statement based on whatever choice

 const viewAllDepartments = [ 
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


const viewAllRoles = [ 
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


const viewAllEmployees = [ 
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
    // Replace this with the code to view all departments
    console.log("Viewing all departments");
}

function handleViewAllRoles() {
    // Replace this with the code to view all departments
    console.log("Viewing all roles");
}

function handleViewAllEmployees() {
    // Replace this with the code to view all departments
    console.log("Viewing all employees");
}

function handleAddDepartment() {
    // Replace this with the code to view all departments
    console.log("Add a department");
}

function handleAddRole() {
    // Replace this with the code to view all departments
    console.log("Add a role");
}

function handleAddEmployee() {
    // Replace this with the code to view all departments
    console.log("Add an employee");
}

function handleUpdateEmployeeRole() {
    // Replace this with the code to view all departments
    console.log("Update an employee role");
}

// Function to handle the main menu
async function mainMenu() {
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
}

mainMenu();