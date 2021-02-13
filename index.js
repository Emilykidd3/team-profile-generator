const inquirer = require('inquirer');

// function to as questions
const init = () => {
    return inquirer.prompt(employeeQuestions);
};

// runs initial funciton
init();