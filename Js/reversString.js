var reverseString = function(s) {
    let left = 0;
    let right = s.length - 1;
    console.log('string', s);

     //check the left is less than right 
    while (left < right) {
      let temp = s[left]; 
      s[left] = s[right]; 
      console.log("s-right", s[left]);
      console.log("s-left", s[right]);
      s[right] = temp; 
      left++; //increment from start
      right--; //decrement from left
    }
    return s;
  };
  
  console.log(reverseString(["h", "e", "l", "l", "o"]));