const Employee = require('./Employee');

// prompts question for school, extend employee
const internQuestions = [
    {
        type:'input',
        name: 'school',
        message: 'What school does your employee attend?'
    }
];

module.exports = Intern;