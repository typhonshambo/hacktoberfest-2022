// ========> Anagram <===========

// function isAnagram(str1, str2) {
//   if (str1.length !== str2.length) return false;
//   let count = {};
//   for (let letter of str1) {
//     count[letter] = (count[letter] || 0) + 1;
//   }
//   for (let ele of str2) {
//     if (!count[ele]) return false;
//     count[ele] -= 1;
//   }
//   // console.log(count);
//   return true;
// }

function isAnagram(a, b) {
  if (a.length !== b.length) return false;
  let map = new Map();
  for (let i in a) {
    if (map.has(a[i])) {
      map.set(a[i], map.get(a[i]) + 1);
    } else {
      map.set(a[i], 1);
    }
  }
  for(let j in b){
    if(map.has(b[j])){
      map.set(b[j],map.get(b[j])-1)
    } else {
      return false;
    }
  }
  let key=map.keys();
  for(let keys of key){
    if(map.get(key[keys]!==0)) return false
  }
  return true;
}

// let res = isAnagram("hello", "ollhe");
let res = isAnagram("b", "d");
console.log(res);

// time complexity O(n)
