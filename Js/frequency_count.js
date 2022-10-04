// function countFreq(arr,n){
//     let mp = new Map()
//     for(let i=0; i<arr.length; i++){
//         if(mp.has(arr[i]))
//             mp.set(arr[i], mp.get(arr[i])+1);
//         else mp.set(arr[i], 1);    
//     } 
// }
// let arr = [10,20,10,10,20,5,20];
// var n = arr.length;
// countFreq(arr,n);

// -------------------------  
function freqCount(a,b){
    let maxArray = {};
    let maxArray2 = {};
    for(let key of a){
        maxArray[key] = (maxArray[key] || 0)+1;
    }
    for(let key of b){
        maxArray2[key] = (maxArray2[key] || 0)+1;
    }
    for(let key in maxArray){
        if(!maxArray2[key*key]){
            return false
        } if(maxArray[key] !== maxArray2[key* key]){
            return false
        }
    }
    return true
}

let res = freqCount([1,2,4,2],[1,4,4,16])
console.log(res);