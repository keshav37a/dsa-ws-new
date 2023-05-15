/* 

12345
1234
123
12
1

*/

const readlineSync = require("readline-sync");

function printPattern() {
  const input = readlineSync.question("Enter number: ");
  for (let i = 0; i < input; i++) {
    for (let j = 0; j < input - i; j++) {
      process.stdout.write(`${j + 1}`);
    }
    console.log("");
  }
}

printPattern();
