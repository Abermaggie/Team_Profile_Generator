// Test the Manager constructor function to be sure each process is deployed correctly.//
const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

it("Can render the office number via constructor argument", () => {
    const testValue = 100;
    const e = new Manager("Foo", 1, "test@email.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});

it("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const e = new Manager("Foo", 1, "test@email.com", 100);
    expect(e.getRole()).toBe(testValue);
});

it("Can get office number via getOffice()", () => {
    const testValue = 100;
    const e = new Manager("Foo", 1, "test@email.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});