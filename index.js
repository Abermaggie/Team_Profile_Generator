const inquirer = require('inquirer');
const Mainmenu = require('./Mainmenu');
const mgrPrompt = require('./Manager');
const egrPrompt = require('./Engineer');
const fs = require('fs').promises;

// function to create HTML structure//
const path ='./index.html'

// let indExist = () = fs.access(path);
// // function indExist() {
// //     if(fs.readFile('./index.html', 'utf-8', function (err, data) {
// //         if(err) {
// //             return console.log(err);
// //         } else {
// //             return console.log("file Exists!");
// //         }
// //     }));
// //     }

// console.log(indExist);
// Write HTML here.//
Mainmenu();

