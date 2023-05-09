/* 

1
22
333
4444
55555

*/

const readlineSync = require("readline-sync");

function printPattern() {
  const n = parseInt(readlineSync.question("Enter the number:"));
  console.log(n);
  console.log(typeof n);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write(`${i + 1}`);
    }
    console.log("");
  }
}

printPattern();
