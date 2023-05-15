/* 

   *
  ***
 *****
  ***
   * 

*/

const readlineSync = require("readline-sync");

function printPattern() {
  const size = readlineSync.question("Enter size: ");
  let nSpc = size / 2;
  let nStr = 1;
  for (let i = 0; i < size; i++) {
    let spc = nSpc;
    let str = nStr;
    while (spc > 0) {
      process.stdout.write(" ");
      spc--;
    }
    while (str > 0) {
      process.stdout.write("*");
      str--;
    }
    console.log("");
    if (i < size / 2 - 1) {
      nSpc -= 1;
      nStr += 2;
    } else {
      nSpc += 1;
      nStr -= 2;
    }
  }
}

printPattern();
