/* 

A
BB
CCC
DDDD
EEEEE

*/

const readlineSync = require("readline-sync");

function printPattern() {
  const size = readlineSync.question("Enter size");
  for (let i = 0; i < size; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write(String.fromCharCode(65 + i));
    }
    console.log("");
  }
}

printPattern();
