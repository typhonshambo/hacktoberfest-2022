// ========> Delete Element from an array <=========  

let arr = [67,54,34,90,12];
let position = 2;
for(let i = position; i < arr.length-1; i++){
    arr[i] = arr[i+1];
}
arr.length = arr.length-1;
console.warn(arr);