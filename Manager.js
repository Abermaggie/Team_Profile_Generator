const inquirer = require('inquirer');
const Mainmenu = require('./Mainmenu');
const fs = require('fs');

function mgrPrompt () {
    console.log("Please enter your manager information")
    inquirer 
    .prompt ([
        {
            type: 'input',
            name: 'mgrName',
            message: "What is the team manager's name?",
        },
        {
            type: 'input',
            name: 'mgrId',
            message: "What is the manager's ID?",
        },
        {
            type: 'input',
            name: 'mgrEmail',
            message: "What is the manager's email address?",
        },
        {
            type: 'number',
            name: 'mgrNumber',
            message: "What is the manager's office number?",
        }
    ])
    .then((answers) => {
        let empContent = generatePro(answers);
        fs.writeFileSync('index.html', empContent, (err) => 
        err? console.log(err) : console.log('Successfully created File!'));
    })
};

let generatePro = ({mgrName, mgrId, mgrEmail, mgrNumber}) =>
`${mgrName}, ${mgrId}, ${mgrEmail}, ${mgrNumber}`;
//     .then((answers) => {{
//         let empContent = generatePro(answers);
//         fs.readFile('TestFile.txt', function (err, data) {
//                     if (err) throw err;
//     })
// }
// )};}



// mgrPrompt();

module.exports = mgrPrompt;