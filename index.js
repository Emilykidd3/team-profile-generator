const inquirer = require('inquirer');
const writePage = require('./develop/page-template');
const writeFile = require('./develop/generate-file');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const employeeArr = [];

const managerQuestions = [
    {
        type:'input',
        name: 'name',
        message: "What is the manager's name?"
    },
    {
        type:'input',
        name: 'id',
        message: "What is the manager's ID number?"
    },
    {
        type:'input',
        name: 'email',
        message: "What is the manager's email?"
    },
    {
        type:'input',
        name: 'officeNumber',
        message: "What is the manager's office number?"
    }
];

const selectionMenu = [
    {
        type: 'list',
        name: 'role',
        message: 'What would you like to do next?',
        choices: ['Add an engineer', 'Add an intern', 'Build my team profile!']
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
        name: 'id',
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
        name: 'id',
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

const engineerQuestionsRun = () => {
    return inquirer.prompt(engineerQuestions)
    .then((engineerAnswers) => {
        const engineer = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.github);
        employeeArr.push(engineer);
        seclectionMenuRun();
    })
}

const internQuestionsRun = () => {
    return inquirer.prompt(internQuestions) 
    .then((internAnswers) => {
        const intern = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school);
        employeeArr.push(intern);
        seclectionMenuRun();
    })
};

const seclectionMenuRun = () => {
    return inquirer.prompt(selectionMenu)
    .then((selectionMenuChoice) => {
        if (selectionMenuChoice.role === 'Add an engineer') {
            engineerQuestionsRun();
        } else if (selectionMenuChoice.role === 'Add an intern') {
            internQuestionsRun();
        } else {
            writeFile(writePage(employeeArr));
            console.log("Your index.html file was created and is in the 'dist' folder!")
        }
    })
};

// function to as questions
const init = () => {
    return inquirer.prompt(managerQuestions)
    .then((managerAnswers) => {
        const manager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber);
        employeeArr.push(manager);
        seclectionMenuRun();
    })
};

// runs initial funciton
init();