const inquirer = require('inquirer');
const Mainmenu = require('./Mainmenu');
const mgrPrompt = require('./Manager');
const egrPrompt = require('./Engineer');
const fs = require('fs');

// function to create HTML structure//
// const path ='./index.html'


// var path ='./index.html'

// function pathConf () {
// fs.stat(path, (err, stats) => {
//     if( !err ){
//          if(stats.isFile()){
//              console.log(stats.isFile());
//          }
   
//          else if(stats.isDirectory()){
//              console.log('is directory? ' + stats.isDirectory());
//          }
//      }
//      else
//          console.log(false); 
// });
// }
// pathConf();



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

