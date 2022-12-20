const inquirer = require('inquirer');

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
};

module.exports = egrPrompt;