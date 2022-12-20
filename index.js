const { default: inquirer } = require('inquirer');

function mainMenu() {
    console.log("Welcome!  Start building your team!")
    inquirer.prompt ([
        {
            type: 'list',
            name: 'menuOptions',
            message: "Please choose from the following options to start building your team:",
            choices: ['Create Manager Profile', 'Create Engineer Profile', 'Create Intern Profile'],
        }
    ])
    }

function mgrPrompt () {
    console.log("Please enter your manager information");
    inquirer 
    .prompt ([
        {
            type: 'input',
            name: 'mgrName',
            message: "What is the team manager's name?",
        },
        {
            type: 'input',
            name: 'mgrId',
            message: "What is the manager's ID?",
        },
        {
            type: 'input',
            name: 'mgrEmail',
            message: "What is the manager's email address?",
        },
        {
            type: 'number',
            name: 'mgrNumber',
            message: "What is the manager's office number?",
        }
    ])
}

function egrPrompt () {
    console.log("Please enter Engineer's information.");
    inquirer.prompt ([
        {
            type: 'input',
            name: 'egrName',
            message: "What is this engineer's name?",
        },
        {
            type: 'input',
            name: 'egrId',
            message: "What is this engineer's ID?",
        },
        {
            type: 'input',
            name: 'egrEmail',
            message: "What is this engineer's email address?",
        },
        {
            type: 'input',
            name: 'egrGit',
            message: "What is this engineer's Git Hub username?",
        }
    ])
}

function intPrompt() {
    console.log("Please enter intern's information.");
    inquirer.prompt ([
        {
            type: 'input',
            name: 'intName',
            message: "What is this intern's name?",
        },
        {
            type: 'input',
            name: 'intId',
            message: "What is this intern's ID?",
        },
        {
            type: 'input',
            name: 'intEmail',
            message: "What is this intern's email address?",
        },
        {
            type: 'input',
            name: 'intSchool',
            message: "What school is this intern from?",
        }
    ])
}