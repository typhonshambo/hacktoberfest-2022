var arr = [1,2,3,3,3];

function isUniqueCount(arr) {
  let i = 0;
  if (arr.length) {
    for (let j = 0; j < arr.length; i++) {
      if (arr[i] !== arr[j]) {
        i++;
        arr[i] = arr[j];
      }
    }
    i += 1;
  } else return false
}
let res = isUniqueCount(arr);
console.table(res);
