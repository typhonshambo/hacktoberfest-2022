// Calculating Factorial
// Factorial = 5
// FactorialCalc = 5*4*3*2*1 = 120

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.question(`What factorial number do you want to calculate \n`, (x) => {
  Factorial(x);
  readline.close();
});

//Factorial
function Factorial(x) {
  value = x;
  let factorial = 1;
  for (let i = x; i > 1; i--) {
    factorial *= i;
  }
  console.log(`The factorial of the number ${x} is ${factorial}`);
}

//Made By UlissesJunior