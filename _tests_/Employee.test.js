const Employee = ("../lib/Employee");

it("Can create an example of Employee usage", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

it("Can render name with Employee.js using arguments passed in", () => {
    const name = "John";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

it("Can render id with Employee.js using arguments passed in", () => {
    const testValue = 100;
    const e = new Employee("Foo", testValue);
    expect(e.id).toBe(testValue);
});

it("Can render email via Employee.js using arguments passed in", () => {
    const testValue = "test@email.com";
    const e = new Employee("Foo", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

it("Can get name from getName() function", () => {
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