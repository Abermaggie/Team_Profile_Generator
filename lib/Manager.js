// Pull in the other files that will be used within this class//
const Employee = require('./Employee');

// Extend the base Employee constructor function to Manager and add office number varaible//
class Manager extends Employee {
    constructor(name, id, email, officenumber) {
        super(name, id, email);
        this.officenumber = officenumber;
    }

getRole() {
    return "Manager";
}

getOfficeNumber() {
    return this.officeNumber;
}

}

// Export required so that this construct can be accessed by other files via import.//
module.exports = Manager;

