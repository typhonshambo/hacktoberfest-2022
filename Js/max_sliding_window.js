let arr = [1, 3, 2, 5, 8, 7];
let k = 3;

function maxSlidingWindow(arr,k){
    let q=[]; 
    let max=[]; 
    for(let i=0;i<arr.length;i++){
        while(q && arr[q[q.length-1]] <=arr[i]){
            q.pop();  
        }
        q.push(i);
        if(q[0]===i-k){
            q.shift();  
        } 
        if(i>=k-1) {max.push(arr[q[0]])}
    }; 
    return max;
};
let res=maxSlidingWindow(arr,k);
console.log(res);