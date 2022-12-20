const inquirer = require('inquirer');
const Mainmenu = require('./Mainmenu');
const Manager = require('./Manager');



// function mgrPrompt () {
//     console.log("Please enter your manager information");
//     inquirer 
//     .prompt ([
//         {
//             type: 'input',
//             name: 'mgrName',
//             message: "What is the team manager's name?",
//         },
//         {
//             type: 'input',
//             name: 'mgrId',
//             message: "What is the manager's ID?",
//         },
//         {
//             type: 'input',
//             name: 'mgrEmail',
//             message: "What is the manager's email address?",
//         },
//         {
//             type: 'number',
//             name: 'mgrNumber',
//             message: "What is the manager's office number?",
//         }
//     ])
// }

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
    ]);
};
// module.exports = index;
Mainmenu();
Manager();
