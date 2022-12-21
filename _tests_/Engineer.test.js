const Engineer = require("../lib/Engineer");

it("Can render GitHub account via constructor function", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Foo", 1, "test@email.com", testValue);
});

it("getRole() shoul return \"Engineeer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Foo", 1, "test@email.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
});

it("Can get username via getGithub()", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Foo",1, "test@email.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});