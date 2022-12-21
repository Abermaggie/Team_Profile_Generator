const Intern = require("../lib/Intern");

it("Can render schoool via constructor function", () => {
    const testValue = "UofM";
    const e = new Intern ("Foo", 1, "test@email.com", testValue);
    expect(e.school).toBe(testValue);
});

it("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Foo", 1, "test@email.com", "UofM");
    expect(e.getrole()).toBe(testValue);
});

it("Can get school via getSchool()", () => {
    const testValue = "UofM";
    const e = new Intern("Foo", 1, "test@email.com", testValue);
    expect(e.getschool()).toBe(testValue);
});
