const Employee = require('./Employee');

// prompts question for school, extend employee
const internQuestions = [
    {
        type:'input',
        name: 'school',
        message: 'What school does your employee attend?'
    }
];

class Intern {
    constructor(school) {
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern'
    }
}

module.exports = Intern;