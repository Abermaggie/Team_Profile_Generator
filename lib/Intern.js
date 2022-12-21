const inquirer = require('inquirer');
const Employee = require('./Employee');

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