const inquirer = require('inquirer');
const Employee = require("./Employee");

// Extend the base Employee constructor function to Engineer and add github username varaible//
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getRole() {
        return "Engineer";
    }

    getGithub() {
        return this.github;
    }
}

// Export required so that this construct can be accessed by other files via import.//
module.exports = Engineer;
