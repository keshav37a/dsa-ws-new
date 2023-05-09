/* 

1
12
123
1234
12345

*/

const readlineSync = require("readline-sync");

function printPattern() {
  const n = readlineSync.question("Enter the number");
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(j);
    }
    console.log("");
  }
}

printPattern();
