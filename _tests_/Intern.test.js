// Test the Intern constructor function to be sure each process is deployed correctly.//
const Intern = require("../lib/Intern");

test("Can render schoool via constructor function", () => {
    const testValue = "UofM";
    const e = new Intern ("Foo", 1, "test@email.com", testValue);
    expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Foo", 1, "test@email.com", "UofM");
    expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
    const testValue = "UofM";
    const e = new Intern("Foo", 1, "test@email.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});
