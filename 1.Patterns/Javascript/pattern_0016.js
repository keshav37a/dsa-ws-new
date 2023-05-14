/* 

   A
  ABA
 ABCBA
ABCDCBA

*/

const readlineSync = require("readline-sync");

function printPattern() {
  const size = readlineSync.question("Enter size");
  let n_spc = size - 1;
  let n_chars = 1;
  for (let i = 0; i < size; i++) {
    let spc = n_spc;
    let chars = n_chars;
    let charCode = 65;
    while (spc > 0) {
      process.stdout.write(" ");
      spc--;
    }
    while (chars > 0) {
      process.stdout.write(String.fromCharCode(charCode));
      chars--;
      if (chars <= n_chars / 2) {
        charCode--;
      } else {
        charCode++;
      }
    }
    n_chars += 2;
    n_spc--;
    console.log("");
  }
}

printPattern();
