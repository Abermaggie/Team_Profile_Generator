const inquirer = require('inquirer');
const Mainmenu = require('./Mainmenu');
const fs = require('fs');
const pathConf = require('./Path');

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
        var empContent = generatePro(answers);
        var empAppend = appendPro(answers);
        if(pathConf() === true) {
                fs.appendFileSync('index.html', empAppend, (err) => 
                err? console.log(err) : console.log('Successfully created File!'));
            } else {
                fs.appendFileSync('index.html', empContent + empAppend, (err) => 
                err? console.log(err) : console.log('Successfully created File!'))
            }
        });
        };


// appendEmp () => {
//     fs.appendFileSync('index.html', empAppend, (err) => 
//     err? console.log(err) : console.log('Successfully created File!'));
// }

// function generateEmp () {
//     fs.appendFileSync('index.html', `${empContent} + ${appendPro}`, (err) => 
//     err? console.log(err) : console.log('Successfully created File!'))
// }
//     // .then((answers) => {
//     //     let empContent = generatePro(answers);
//     //     fs.writeFileSync('index.html', empContent, (err) => 
//     //     err? console.log(err) : console.log('Successfully created File!'));
//     // })
// // var appendInfo = generatePro(answers)
let generatePro = ({mgrName}) =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="./dist/style.css">
    <title>${mgrName}'s Team</title>
</head>
<body>
        <header class="jumboTron">My Team</header>`;

let appendPro = ({mgrName, mgrId, mgrEmail, mgrNumber}) =>
    `   <div class="teamContainer">
            <div class="infoContainer">
                <div class="infoBoxes">
                    <div class="emTitle">
                        <h1 class="name">${mgrName}
                            <br>Manager</h1> 
                            <ul class="stats">
                                <li class="emId">ID: ${mgrId}</li>
                                <li class="email">Email: ${mgrEmail}<br></li>
                                <li class="office">Office Phone: ${mgrNumber}</li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>           
        <script src=""></script>
    </body>
</html>`
;

module.exports = mgrPrompt;