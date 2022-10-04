var inp = 5656;
var inp = "chc";
var inp= -676;

function checkInteger(inp) {
  let pattern = /^-?[0-9]+$/;
  let res = pattern.test(inp);
  return res;
}

console.log(checkInteger(inp));
