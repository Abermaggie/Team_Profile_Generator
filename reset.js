// Remove old team file so you can generate a new one.//
const fs = require('fs');
if(fs.existsSync('./dist/team.html')) {
    fs.unlinkSync('./dist/team.html');
    console.log('/dist/foder reset!');
}