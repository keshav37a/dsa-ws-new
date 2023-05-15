/* 

1
2 3
4 5 6
7 8 9 10

*/

const readlineSync = require("readline-sync");

function printPattern() {
  const size = readlineSync.question("Enter size: ");
  let num = 1;
  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(`${num++} `);
    }
    console.log("");
  }
}

printPattern();
