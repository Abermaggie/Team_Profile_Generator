const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const path =require('path');

// function to create HTML structure//
const Dist_Dir = path.resolve(_dirname, 'dist');
const distPath =path.join(DIST_DIR, 'team.html');

const render = require('./src/page-template.js');

const TeamMembers = [];
const idArray =[];

console.log(
    '\nWelcome to the team generator! \nUse`npm run reset` to reset the dist/folder\n'
);

function appMenu() {
    function createManager() {
        console.log('Please build your team');
        inquirer 
        .prompt ([
        {
            type: 'input',
            name: 'managerName',
            message: "What is the team manager's name?",
        },
        {
            type: 'input',
            name: 'managerId',
            message: "What is the manager's ID?",
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is the manager's email address?",
        },
        {
            type: 'number',
            name: 'managerOfficeNumber',
            message: "What is the manager's office number?",
        }
    ])
    .then((answers) => {
        const manager = new Manager(
            answers.managerName,
            answers.managerId,
            answers.managerEmail,
            answers.managerOfficeNumber
        );
        teamMembers.push(manager);
        idArray.push(answers.managerId);
        createTeam();
    });
}

function createTeam() {
    {
    console.log("Welcome!  Start building your team!")
    inquirer
        .prompt([
        {
            type: 'list',
            name: 'memberChoice',
            message: "Please choose from the following options to start building your team:",
            choices: [ 'Create Engineer Profile', 'Create Intern Profile', "I am finished adding team members",
        ],
        },
    ])
    // test this//
    .then((userChoice) => {
        switch (userChoice.memberChoice) {
            case 'Engineer':
                addEngineer();
                break;
            case'Intern':
                addIntern();
                break;
            default:
                buildTeam();
        }
    });
}

function addEngineer() {
    console.log("Please enter Engineer's information.");
    inquirer
        .prompt ([
        {
            type: 'input',
            name: 'engineerName',
            message: "What is this engineer's name?",
        },
        {
            type: 'input',
            name: 'engineerId',
            message: "What is this engineer's ID?",
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "What is this engineer's email address?",
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: "What is this engineer's Git Hub username?",
        }
    ])
    .then((answers) => {
        const engineer = new Engineer(
            answers.engineerName,
            answers.engineeerId,
            answers.engineerEmail,
            answers.engineerGithub
        );
        teamMembers.push(engineer);
        idArray.push(answers.engineerId);
        createTeam();
    });
}

function addIntern() {
    console.log("Please enter intern's information.");
    inquirer
        .prompt ([
        {
            type: 'input',
            name: 'internName',
            message: "What is this intern's name?",
        },
        {
            type: 'input',
            name: 'internId',
            message: "What is this intern's ID?",
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "What is this intern's email address?",
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "What school is this intern from?",
        }
    ])
    .then((answers) => {
        const intern = new Intern(
            answers.internName,
            answers.internId,
            answers.internEmail,
            answers.internSchool
        );
        teamMembers.push(intern);
        idArray.push(ansswers.internId);
        createTeam();
    });
}

function buildTeam() {
    if(!fs.existsSync(DIST_DIR)) {
        fs.mkdirSync(DIST_DIR);
    }
    fs.writeFileSync(distPath, render(teamMembers), 'utf-8');
    }
    createManager();
}
}

appMenu();
