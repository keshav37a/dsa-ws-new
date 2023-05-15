/* 

ABCDE
ABCD
ABC
AB
A

*/

const readlineSync = require("readline-sync");

function printPattern() {
  const size = readlineSync.question("Enter size: ");
  for (let i = 0; i < size; i++) {
    let code = 65;
    for (let j = size - i - 1; j >= 0; j--) {
      process.stdout.write(String.fromCharCode(code));
      code++;
    }
    console.log("");
  }
}

printPattern();
