const axios = require("axios");
const index = require('../index');

jest.mock("axios");

describe('Mainmenu', () => {
    describe('recPrompt', () => {
        it("should receive the different choices and return corresponding function", () => {
            const input = new Mainmenu().then(answers);
            console.log(input.answers);
            // const result = mgrPrompt()
            // const mock = jest.spyOn(console, "log");
            // mock.mockImplementation(() => {});

            // log.return(input);
            // expect(mock).toEqual(result);
        })
    })
    })