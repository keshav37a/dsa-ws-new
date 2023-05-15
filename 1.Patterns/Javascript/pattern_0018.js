/* 

**********
****  ****
***    ***
**      **
*        *
**      **
***    ***
****  ****
**********

*/

const readlineSync = require("readline-sync");

function printPattern() {
  const size = readlineSync.question("Enter size: ");
  let nStr = size;
  let nSpc = 0;
  for (let i = 0; i < 2 * size; i++) {
    let str = nStr;
    let spc = nSpc;
    while (str > 0) {
      process.stdout.write("*");
      str--;
    }
    str = nStr;
    while (spc > 0) {
      process.stdout.write(" ");
      spc--;
    }
    while (str > 0) {
      process.stdout.write("*");
      str--;
    }
    console.log("");
    if (i >= size) {
      nStr++;
      nSpc -= 2;
    } else if (i == size - 1) {
      continue;
    } else {
      nStr--;
      nSpc += 2;
    }
  }
}

printPattern();
