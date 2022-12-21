const inquirer = require('inquirer');
const mgrPrompt = require('./Manager');
const egrPrompt = require('./Engineer');
const fs = require('fs');

// function to create HTML structure//

function generateHeader() {
    let headContent = generateInfo();
    fs.writeFileSync('index.html', headContent, (err) => 
    err? console.log(err) : console.log('Successfully Created File!'));
}

let generateInfo = () =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="./dist/style.css">
    <title>Team Roster</title>
</head>
    <body>
        <header class="jumboTron">My Team</header>`
        ;

function Mainmenu() {
    console.log("Welcome!  Start building your team!")
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'menuOptions',
            message: "Please choose from the following options to start building your team:",
            choices: ['Create Manager Profile', 'Create Engineer Profile', 'Create Intern Profile'],
        }
    ])
    .then((answers) => {
        console.log(answers.menuOptions)
        if(answers.menuOptions === "Create Manager Profile") {
            mgrPrompt()
        } else if (answers.menuOptions === "Create Engineer Profile") {
            egrPrompt()
        } else {
            intPrompt();
            return
        };
    }
    )};
// Write HTML here.//
Mainmenu();
generateHeader();


