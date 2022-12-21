const inquirer = require('inquirer');
const Employee = require("./constructor");

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

module.exports = Engineer;

function egrPrompt () {
    console.log("Please enter Engineer's information.");
    inquirer.prompt ([
        {
            type: 'input',
            name: 'egrName',
            message: "What is this engineer's name?",
        },
        {
            type: 'input',
            name: 'egrId',
            message: "What is this engineer's ID?",
        },
        {
            type: 'input',
            name: 'egrEmail',
            message: "What is this engineer's email address?",
        },
        {
            type: 'input',
            name: 'egrGit',
            message: "What is this engineer's Git Hub username?",
        }
    ])
    .then((answers) => {
        var empContent = generatePro(answers);
                fs.appendFileSync('index.html', empContent, (err) => 
                err? console.log(err) : console.log('Successfully created File!'));
        });
};

let generatePro = ({egrName, egrId, egrEmail, egrGit}) =>
    `   <div class="teamContainer">
            <div class="infoContainer">
                <div class="infoBoxes">
                    <div class="emTitle">
                        <h1 class="name">${egrName}
                            <br>Manager</h1> 
                            <ul class="stats">
                                <li class="emId">ID: ${egrId}</li>
                                <li class="email">Email: ${egrEmail}<br></li>
                                <li class="office">Git Hub Repository: ${egrGit}</li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>           `
;
module.exports = egrPrompt;