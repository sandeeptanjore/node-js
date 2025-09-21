const fs = require("node:fs");

console.log("Start of the script");

// [Async] => Non Blocking

fs.readFile('notes.txt', 'utf8', (error, data) => {
    if(error) console.log(error);
    else
        console.log("Contents fetched: ", data);
});

console.log("End of the script");