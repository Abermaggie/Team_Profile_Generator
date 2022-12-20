const inquirer = require('inquirer');

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

module.exports = intPrompt;