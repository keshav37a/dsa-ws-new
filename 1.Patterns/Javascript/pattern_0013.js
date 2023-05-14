/* 

A
AB
ABC
ABCD
ABCDE
ABCDEF

*/

const readlineSync = require("readline-sync");

function printPattern() {
  const size = readlineSync.question("Enter size: ");
  for (let i = 0; i < size; i++) {
    let charCode = 65;
    for (let j = 0; j <= i; j++) {
      process.stdout.write(String.fromCharCode(charCode++));
    }
    console.log("");
  }
}

printPattern();
