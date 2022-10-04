let arr1 = [1, 3, 4, 5], arr2 = [2, 6, 8];
let m=arr1.length, n=arr2.length;

// using map  
// T.C=> O(m+n) ~= O(n)  

function sortTwoArrays(arr1,m,arr2,n) {
    let map=new Map(); 
    
    for(let key in arr1) {
        map.set(arr1[key],1);
    }
    for(let key in arr2){
        map.set(arr2[key],1);
    }
    let keys=map.keys(); 
    // console.log(keys);
    let res=[];
    for(let key of keys){
        res.push(key)
    } 
    res.sort();
    return res;
}

let res=sortTwoArrays(arr1,m,arr2,n);
console.log(res);