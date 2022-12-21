// const inquirer = require('inquirer');
// const mgrPrompt = require('./Manager');
// const egrPrompt = require('./Engineer');
// const intPrompt = require('./intern');
// // const index = require('./index');

// function Mainmenu() {
//     console.log("Welcome!  Start building your team!")
//     inquirer
//     .prompt([
//         {
//             type: 'list',
//             name: 'menuOptions',
//             message: "Please choose from the following options to start building your team:",
//             choices: ['Create Manager Profile', 'Create Engineer Profile', 'Create Intern Profile'],
//         }
//     ])
//     // test this//
//     .then((answers) => {
//         console.log(answers.menuOptions)
//         if(answers.menuOptions === "Create Manager Profile") {
//             mgrPrompt()
//         } else if (answers.menuOptions === "Create Engineer Profile") {
//             egrPrompt()
//         } else {
//             intPrompt();
//         };

//         }
//     )};


//     module.exports = Mainmenu;