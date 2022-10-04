var isValid = function(s) {
    if (s.length % 2 !== 0) return false;
  const stack = [];
  //define map with key value
  const map = new Map([
    ['(', ')'],
    ['[', ']'],
    ['{', '}']
  ]);
  
  //iterate string   
  for (let i = 0 ; i < s.length ; i += 1) {
    //check given string is presnet in map or not if its present then get the value of key and push it in stack
    if (map.has(s[i])) {
      
      stack.push(map.get(s[i]));
      console.log(stack);
   //else pop stack   
    } else if (s[i] !== stack.pop()) {
      return false;
    } 
  }
  return stack.length === 0;

};
//pass any brackets pattern here
console.log(isValid('()'));