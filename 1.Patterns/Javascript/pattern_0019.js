/* 

*     *
**   **
*** ***
*******
*** ***
**   **
*     *

*/

const readlineSync = require("readline-sync");

function printPattern() {
  const size = readlineSync.question("Enter size: ");
  let n_str = 1;
  let n_spc = 2 * (size - 1);
  for (let i = 0; i < 2 * size - 1; i++) {
    let str = n_str;
    let spc = n_spc;
    while (str > 0) {
      process.stdout.write("*");
      str--;
    }
    str = n_str;
    while (spc > 0) {
      process.stdout.write(" ");
      spc--;
    }
    while (str > 0) {
      process.stdout.write("*");
      str--;
    }
    console.log("");
    if (i < size - 1) {
      n_str += 1;
      n_spc -= 2;
    } else {
      n_str -= 1;
      n_spc += 2;
    }
  }
}

printPattern();
