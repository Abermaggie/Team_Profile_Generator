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