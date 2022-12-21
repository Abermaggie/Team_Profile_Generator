const inquirer = require('inquirer');
const Employee = require('./Employee');

// Extend the base Employee constructor function to Intern and add school varaible//
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getRole() {
        return "Intern";
    }

    getSchool() {
        return this.school;
    }
}

// Export required so that this construct can be accessed by other files via import.//
module.exports = Intern;