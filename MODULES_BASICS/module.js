const names = require('./names.js');
const sayHi = require('./utils.js');
const data = require('./alternateExport.js');

console.log(data);
sayHi(names.john);
sayHi(names.peter);
