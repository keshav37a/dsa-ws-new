/* 

*******
 *****
  ***
   *

*/

const readlineSync = require("readline-sync");

function printPattern() {
  const size = readlineSync.question("Enter size : ");
  let str = 2 * size - 1;
  for (let i = 1; i <= size; i++) {
    let spc = i - 1;
    let st = str;
    while (spc > 0) {
      process.stdout.write(" ");
      spc--;
    }
    while (st > 0) {
      process.stdout.write(`*`);
      st -= 1;
    }
    str -= 2;
    console.log("");
  }
}

printPattern();
