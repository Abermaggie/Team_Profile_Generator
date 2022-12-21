const inquirer = require('inquirer');
const Employee = require('./constructor');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getrole() {
        return "Intern";
    }

    getschool() {
        return this.school;
    }
}

module.exports = Intern;

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