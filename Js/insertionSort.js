function inSertionSort(arr) {
  for (let right = 1; right < arr.length; right++) {
    let curr = right;
    while (curr>=1 && arr[curr-1]>arr[curr]) {
        // console.log(curr)
      [arr[curr - 1], arr[curr]] = [arr[curr], arr[curr - 1]];
    }
  }
  return arr
}

let arr = [9,8,7,6,5,4,3,2,1];
console.log(inSertionSort(arr));