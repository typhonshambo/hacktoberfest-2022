// ========> Search Element in an array <============  

let arr = [67,54,34,90,12];
let search = 34;
let res = undefined;
for(let i = 0; i < arr.length; i++){
    if(arr[i] == search){
        res = i;
        break;
    }
}
console.log(res);
console.log(arr.indexOf(search));