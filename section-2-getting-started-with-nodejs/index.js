const fs = require('node:fs'); //Built in module


// const content= fs.readFileSync('notes.txt','utf-8');
// console.log(content);

const contents= fs.readFileSync('notes.txt', 'utf-8');
console.log(contents);

fs.writeFileSync('copy.txt', 'hey', 'utf-8');
fs.appendFileSync('notes.txt', '\nhey sandeep', 'utf-8');
console.log(contents);

fs.mkdirSync('games/xyz/a', {recursive: true});