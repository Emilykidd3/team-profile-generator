// prompts questions for name, id, email

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

module.exports = Employee;