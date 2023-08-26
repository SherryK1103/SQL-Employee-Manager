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


