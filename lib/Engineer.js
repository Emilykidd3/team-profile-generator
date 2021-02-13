const Employee = require('./Employee');

// prompts question for github extends employee 
const engineerQuestions = [
    {
        type:'input',
        name: 'github',
        message: "What is the employee's GitHub?"
    }
];

class Engineer {
    constructor(github) {
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;