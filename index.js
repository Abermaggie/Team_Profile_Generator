const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const path = require('path');

// create directory path//
const Dist_Dir = path.resolve(_dirname, 'dist');
const distPath =path.join(DIST_DIR, 'team.html');

//import the generate team functions so they can be used in this file//
const render = require('./src/page-template.js');

// create array place holders//
const teamMembers = [];
const idArray =[];

console.log(
    '\nWelcome to the team generator! \nUse`npm run reset` to reset the dist/folder\n'
);

// Create the first menu of prompts asking who the manager is//
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
    // Write this information to a new constructor function//
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

// Create inquirer prompts for the next series of questions that will
// take the user to individual employee set up//
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

// create inquirer prompts to set up an Engineer//
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

// create inqurier prompts to set up an Intern//
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

// build team to file path//
function buildTeam() {
    if(!fs.existsSync(DIST_DIR)) {
        fs.mkdirSync(DIST_DIR);
    }
    fs.writeFileSync(distPath, render(teamMembers), 'utf-8');
    }
    createManager();
}
}
// call function//
appMenu();
