// Test the Employee constructor function to be sure each process is deployed correctly.//
const Employee = require("../lib/Employee");

test("Can create an example of Employee usage", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

test("Can render name with Employee.js using arguments passed in", () => {
    const name = "John";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("Can render id with Employee.js using arguments passed in", () => {
    const testValue = 100;
    const e = new Employee("Foo", testValue);
    expect(e.id).toBe(testValue);
});

test("Can render email via Employee.js using arguments passed in", () => {
    const testValue = "test@email.com";
    const e = new Employee("Foo", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("Can get name from getName() function", () => {
    const testValue ="John";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

it("Can get id from getId() function", () => {
    const testValue = 100;
    const e = new Employee("Foo", testValue);
    expect(e.getId()).toBe(testValue);
});

it("getRole() function should return \"Employee\"", () => {
    const testValue = "Employee";
    const e = new Employee("John", 1, "test@email.com");
    expect(e.getRole()).toBe(testValue);
});