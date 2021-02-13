const { off } = require('process');
const Employee = require('./Employee');

// prompts question for office number extends employee
const managerQuestions = [
    {
        type:'input',
        name: 'office-number',
        message: "What is the employees office number?"
    }
];

class Manager {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager'
    }
}

module.exports = Manager;