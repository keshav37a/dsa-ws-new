/* 

E
DE
CDE
BCDE
ABCDE

*/

const readlineSync = require("readline-sync");

function printPattern() {
  const size = parseInt(readlineSync.question("Enter size: "));
  for (let i = 0; i < size; i++) {
    let charCode = 65 + size - i;
    for (let j = 0; j <= i; j++) {
      process.stdout.write(`${String.fromCharCode(charCode + j - 1)}`);
    }
    console.log("");
  }
}

printPattern();
