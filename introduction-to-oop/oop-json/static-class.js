// File System 
const fs = require('fs');
const dataJson = fs.readFileSync('./data.json','utf8')
console.log(dataJson)