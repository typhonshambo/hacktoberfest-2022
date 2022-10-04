let s = "Hello World";

function lastWord(s){
    if(s.length == 0) return 0;
    let arr = s.trim().split(" ");
    return arr[arr.length - 1].length;
}
let res = lastWord(s);
console.log(res)