let arr = [1,2,3,5,6];
let n=arr.length;

function missingNumber(arr,n){
    let total=Math.floor((n+1)*(n+2)/2)
    // console.log(total)
    for(let i=0;i<n;i++)
        total -= arr[i]
        return total
}

let result = missingNumber  (arr,n);
console.log(result)