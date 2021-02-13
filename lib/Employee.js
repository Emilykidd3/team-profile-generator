// prompts questions for name, id, email

const inquirer = require("inquirer");

const employeeQuestions = [
    {
        type:'input',
        name: 'name',
        message: "What is the employee's name?"
    },
    {
        type:'input',
        name: 'ID',
        message: "What is the employee's ID?"
    },
    {
        type:'input',
        name: 'email',
        message: "What is the employee's email?"
    }
];

class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee"
    }
};

module.exports = Employee;