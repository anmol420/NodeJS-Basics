const { readFileSync, writeFileSync } = require('fs');

const sample = readFileSync('./content/sample.txt', 'utf8');
const sample_2 = readFileSync('./content/sample_2.txt', 'utf8');
console.log(sample, sample_2);

writeFileSync('./content/result.txt', `${sample} ${sample_2}`, { flag: 'a' });
