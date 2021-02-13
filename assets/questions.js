const inquirer = require("inquirer");
const { choices } = require("yargs");

const managerQuestions = [
    {
        type:'input',
        name: 'name',
        message: "What is the manager's name?"
    },
    {
        type:'input',
        name: 'emoloyeeId',
        message: "What is the manager's ID number?"
    },
    {
        type:'input',
        name: 'email',
        message: "What is the manager's email?"
    },
    {
        type:'input',
        name: 'office-number',
        message: "What is the manager's office number?"
    }
];

const selectionMenu = [
    {
        type: 'list',
        name: 'role',
        message: 'What would you like to do next?',
        choices: ['Add an engineer', 'An intern', 'Build my team profile!']
    }
]

const engineerQuestions = [
    {
        type:'input',
        name: 'name',
        message: "What is the engineers's name?"
    },
    {
        type:'input',
        name: 'employeeId',
        message: "What is the engineers's ID number?"
    },
    {
        type:'input',
        name: 'email',
        message: "What is the engineers's email?"
    },
    {
        type:'input',
        name: 'github',
        message: "What is the engineers's GitHub?"
    }
];

const internQuestions = [
    {
        type:'input',
        name: 'name',
        message: "What is the intern's name?"
    },
    {
        type:'input',
        name: 'employeeId',
        message: "What is the intern's ID number?"
    },
    {
        type:'input',
        name: 'email',
        message: "What is the intern's email?"
    },
    {
        type:'input',
        name: 'school',
        message: 'What school does the intern attend?'
    }
];