// Creating essential requirement const

const inquirer = require("inquirer");
const mysql = require("mysql2");
// cfonts for command line
const cfonts = require("cfonts");

// cfont function 

cfonts.show("Yash's Employee Tracker, Backend Commerce", {
    font: "block",
    align: "left",
    colors: ["orange"], 
    background: "transparent",
    env: "node"
})

require("dotenv").config();

// MySQL connection

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    database: process.env.DB_Name,
    user: process.env.DB_User,
    password: process.env.DB_Password
    
});

connection.connect((err) => {
    if (err) throw err;
    console.log("Success! Connected to Database");
    start();
});

// Function (init) start to Tracker App

function start() {
    inquirer
        .prompt({
            type: "list",
            name: "selection",
            message: "What would you like to do?",
            choices: [
                "View all departments",
                "View all roles",
                "View all employees",
                "Add Department",
                "Add Role",
                "Add Employee",
                "Add Manager",
                "Update an Employee Role",
                "Update an Employee Manager",
                "Quit",
            ],
        })
        .then((answer) => {
            switch (answer.selection) {
                case "View all departments":
                    viewAllDepartments();
                    break;
                case "View all roles":
                    viewAllRoles();
                    break;
                case "View all employees":
                    viewAllEmployees();
                    break;
                case "Add Department":
                    addDepartment();
                    break;
                case "Add Role":
                    addRole();
                    break;
                case "Add Employee":
                    addEmployee();
                    break;
                case "Add Manager":
                    addManager();
                    break;
                case "Update an Employee Role":
                    updateEmployeeRole();
                    break;
                case "Update an Employee Manager":
                    updateEmployeeManager();
                    break;
                case "Quit":
                    connection.end();
                    console.log("Goodbye!");
                    break;
            }
        });
}
