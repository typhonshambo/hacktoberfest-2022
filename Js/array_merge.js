// ========> Merge Two Array manually(using for loop) <==========  
let arr1 = [34,78,12,8,5,3,21];
let arr2 = [67,54,34,90,12,3];
let arr3 = [];

for(let i=0;i<arr1.length;i++) {
    arr3[i]=arr1[i];
}
for(let i=0;i<arr2.length;i++) {
    arr3[arr1.length+i] = arr2[i];
}
console.table(arr3);
