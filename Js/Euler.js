// Calculating Euler
// Euler = 1 + 1/2! + 1/3! + 1/4! + 1/5!...

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.question(
  `How accurately do you want to calculate Euler? \n`,
  (accuracy) => {
    euler(accuracy);
    readline.close();
  }
);

//Fatorial
function fat(x) {
  valor = x;
  let fat = 1;
  for (let i = x; i > 1; i--) {
    fat *= i;
  }
  return fat;
}

//Euler
function euler(accuracy) {
  let Euler = 1;
  for (var x = 2; x < accuracy; x++) {
    y = fat(x);
    Euler = Euler + 1 / y;
  }
  console.log("Euler = " + Euler);
}

//Made By UlissesJunior