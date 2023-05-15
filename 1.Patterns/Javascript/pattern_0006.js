/* 

    *
   ***
  *****
 *******
********* 

*/

const readlineSync = require("readline-sync");

function printPattern() {
  const size = readlineSync.question("Enter size: ");
  for (let i = 1; i <= size; i++) {
    let nSpc = size - i;
    let nStar = 2 * i - 1;
    while (nSpc > 0) {
      process.stdout.write(" ");
      nSpc--;
    }
    while (nStar > 0) {
      process.stdout.write("*");
      nStar--;
    }
    console.log("");
  }
}

printPattern();
