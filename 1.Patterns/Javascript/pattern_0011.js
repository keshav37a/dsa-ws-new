/* 

1      1
12    21
123  321
12344321

*/

const readlineSync = require("readline-sync");

function printPattern() {
  const size = readlineSync.question("Enter size: ");
  for (let i = 1; i <= size; i++) {
    let count = i;
    for (let j = 1; j <= count; j++) {
      process.stdout.write(`${j}`);
    }
    for (let j = 1; j <= 2 * (size - i); j++) {
      process.stdout.write(" ");
    }
    for (let j = i; j > 0; j--) {
      process.stdout.write(`${j}`);
    }
    console.log("");
  }
}

printPattern();
