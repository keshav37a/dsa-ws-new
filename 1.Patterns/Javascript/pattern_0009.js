/* 

*
**
***
****
***
**
*

*/

const readlineSync = require("readline-sync");

function printPattern() {
  const size = readlineSync.question("Enter size: ");
  let nStr = 1;
  for (let i = 0; i < 2 * size - 1; i++) {
    let str = nStr;
    while (str > 0) {
      process.stdout.write("*");
      str--;
    }
    console.log("");
    if (i >= size - 1) {
      nStr--;
    } else {
      nStr++;
    }
  }
}

printPattern();
