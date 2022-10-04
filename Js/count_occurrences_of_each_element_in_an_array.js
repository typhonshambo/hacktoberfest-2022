// let A= [2,5,3,5,6,7,2];
// let obj = {}

// for(let i=0;i<A.length;i++) {
//     let num = A[i];
//     obj[num] = obj[num] ? obj[num]+1: 1;
// };
// console.log(obj);

let B = [5,3,6,7,2,5,2];
let C = [2,5,3,5,6,7,2];
let objB = {};
let objC = {};

for(let i=0;i<B.length;i++) {
    let num = B[i];
    objB[num] = objB[num] ? objB[num]+1 : 1;
}

for(let i=0;i<C.length;i++) {
    let num = C[i];
    objC[num] = objC[num] ? objC[num]+1 : 1;
}

for(let key in objB){
    if(objC[key*key] !== objB[key]) {
        console.log(false)
        return false;
    }
    console.log(true)
    return true;
}
console.log(objB);
console.log(objC);
