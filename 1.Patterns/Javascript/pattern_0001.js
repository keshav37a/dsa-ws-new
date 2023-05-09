/* 

*
**
***
****
*****

*/

const readlineSync = require("readline-sync");

function printPattern() {
  try {
    const n = readlineSync.question("Input n");
    for (let i = 0; i < n; i++) {
      for (let j = 0; j <= i; j++) {
        process.stdout.write("*");
      }
      process.stdout.write("\n");
    }
  } catch (error) {
    console.log(error);
  }
}

printPattern();
