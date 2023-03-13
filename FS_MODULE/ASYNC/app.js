const { readFile, writeFile, read } = require('fs');

let first="", second="";

readFile('./content/sample.txt', 'utf8', (err, result) => { 
    if (err) {
        console.log(err);
        return;
    };
    first = result;
    readFile('./content/sample_2.txt', 'utf8', (err, result) => {
        if(err) {
            console.log(err);
            return;
        }
        second = result;
        writeFile('./content/result.txt', `${first} ${second}`, { flag: 'a' }, (err, result) => {
            if(err) {
                console.log(err);
                return;
            }
            console.log(result);
        });
    });
});

console.log(first, second); // in this case the result will be undefined
