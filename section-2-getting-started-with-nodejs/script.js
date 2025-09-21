const fs = require('node:fs');

//Task : Read the contents of notes.txt

console.log('Start of the script');

// Sync => Blocking Operations (not a good idea or practice)
const contents= fs.readFileSync('notes.txt', 'utf8');
console.log(contents);
console.log('End of Script');

