var lengthOfLongestSubstring = function (s) {
  let start = 0;
  let end = 0;
  let maxLength = 0;
  let map = new Set();
  if (!s) {
    return 0;
  }
  while (end < s.length) {
    if (!map.has(s[end])) {
      map.add(s[end]);
      end++;
      maxLength = Math.max(maxLength, map.size);
    } else {
      map.delete(s[start]);
      start++;
    }
  }
  return maxLength;
};

let res=lengthOfLongestSubstring("abcabbc");
console.log(res)
