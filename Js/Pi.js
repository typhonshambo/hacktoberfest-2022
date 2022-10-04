// Calculating PI
// PI = 4 - 4/3 + 4/5 - 4/7 + 4/9...

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.question(
  `How accurately do you want to calculate pi? \n`,
  (accuracy) => {
    pi(accuracy);
    readline.close();
  }
);

function pi(accuracy) {
  var PI = 4;
  var p = -1;
  for (var x = 3; x < accuracy; x += 2) {
    p = p + 1;
    if (p % 2 === 0) {
      PI = PI - 4 / x;
    } else {
      PI = PI + 4 / x;
    }
  }
  console.log("PI = " + PI);
}

//Made By UlissesJunior