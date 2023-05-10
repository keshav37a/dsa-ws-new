/* 

*****
****
***
**
*

*/

const readlineSync = require("readline-sync");

function printPattern() {
  const size = readlineSync.question("Enter number");
  for (let i = size; i > 0; i--) {
    for (let j = i; j > 0; j--) {
      process.stdout.write("*");
    }
    console.log("");
  }
}

printPattern();
