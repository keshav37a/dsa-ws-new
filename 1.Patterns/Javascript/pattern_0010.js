/* 

1
01
101
0101
10101

*/

const readlineSync = require("readline-sync");

function printPattern() {
  const size = readlineSync.question("Enter size: ");
  let isZeroToggled = false;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write(isZeroToggled ? "0" : "1");
      isZeroToggled = !isZeroToggled;
    }
    console.log("");
  }
}

printPattern();
