// these are the packages that are required for the application to function properly
const inquirer = require('inquirer');
// const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 
const fs = require('fs');
const generateHelperCode = require('./src/GenerateHelperCode.js');
const team = [];
const fileName = "generateHelperCode.js"


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
const engineerData = () => {
    return inquirer.prompt([{
    type: 'input',
    message: 'Who is the engineer?',
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
        message: 'What is their github uswername?',
        name: 'github',

    }
])
.then(answers => {
    console.log(answers);
    const engineer = new Engineer(answers.name, answers.empID, answers.email, answers.github);
    team.push(engineer);
    questionPrompt();
})
}
const internData = () => {
    return inquirer.prompt([{
    type: 'input',
    message: 'Who is the intern?',
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
        message: 'What school do they attend?',
        name: 'school',

    }
])
.then(answers => {
    console.log(answers);
    const intern = new Intern(answers.name, answers.empID, answers.email, answers.school);
    team.push(intern);
    questionPrompt();
})
}

const questionPrompt = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Please select your next step:',
            choices: ['add an engineer', 'add an intern', 'finish and build my org chat']
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
    console.log("Org chart created successfully!");
fs.writeFileSync(fileName, generateHelperCode(team));
}


managerData();