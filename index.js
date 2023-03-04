// these are the packages that are required for the application to function properly
const inquirer = require('inquirer');
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 
const fs = require('fs');
const generateHTML = require('./src/helperCode.js');
const team = [];


const managerData = () => {
    return inquirer.prompt([{
    type: 'input',
    message: 'Who is the manager?',
    name: 'name',
    },
    {
        type: 'input',
        message: 'What is their employee ID?',
        name: 'empID',
    },
    {
        type: 'input',
        message: 'What is their email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is their offce number?',
        name: 'office',

    }
])
.then(answers => {
    console.log(answers);
    const manager = new Manager(answers.name, answers.empID, answers.email, answers.office);
    team.push(manager);
    questionPrompt();
})
}

const questionPrompt = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Please select your next step:',
            choices: ['add engineer', 'add intern', 'finish and build my org chat']
        }])
        .then(userChoice => {
            switch (userChoice.menu) {
                case "add an engineer":
                    engineerData();
                    break;
                case "add an intern":
                    internData();
                    break;
                default:
                    buildChart();
            }
        })
        }
const buildChart = () => {
    console.log("Org Chart Created Successfully.");
    
}
managerData();