// let x = 121;

function isPalindrome(x) {
  let y = "" + x;
  let start = 0;
  let end=y.length-1;
  while (start < end) {
    if(y[start]!==y[end]) return false;
    start++;
    end--;
  }
  return true;
}
let res = isPalindrome(121);
console.log(res);

// time complexity is O(n)  
