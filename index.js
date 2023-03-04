// these are the packages that are required for the application to function properly
const inquirer = require('inquirer');
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 
const fs = require('fs');
const generateHTML = require('./src/helperCode.js');


const managerData = () => {
    return inquirer.prompt([{
    type: 'input',
    message: 'Who is the manager?',
    name: 'name',
    },
    {
        type: 'input',
        message: 'What is their employee ID?',
        name: 'employeeId',
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
}
managerData();