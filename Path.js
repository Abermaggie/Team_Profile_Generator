const fs = require('fs');

var path ='./index.html'

function pathConf () {
fs.stat(path, (err, stats) => {
    if( !err ){
         if(stats.isFile()){
             console.log("Info added to your current Team!");
         }
   
         else if(stats.isDirectory()){
             console.log('is directory? ' + stats.isDirectory());
         }
     }
     else
         console.log("New HTML file created!"); 
});
}

module.exports = pathConf;