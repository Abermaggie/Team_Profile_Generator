// Employee will be the base class item with the constructor arguments reflecting information
// commonly relevant to all the classes.//

class Employee {
    
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
// function invocation to pull each element from the result of a given prompt//
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }
}
// Export required so that this construct can be accessed by other files via import.//
module.exports = Employee;