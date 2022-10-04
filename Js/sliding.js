let arr = [1,3-1,-3,5,3,6,7];

let n=arr.length;
let w=3;
let result = []; 
for(let currWindow=0;currWindow<n-w+1;currWindow++){
    let max = arr[currWindow];
    //find the max value from a window of size w
    for(let i=currWindow;i<currWindow+w;i++){
        //update the max variable if current value of arr at index 1 is greater than maximum
        if(max<arr[i]){
            max = arr[i];
            console.log(max);
        }
    }
    result.push(max);
} 
console.log(result);

// Time complexicity => total window (n-w+1) each window runs w times total tc =(n-w+1)*w ~=O(nw);

//observation window size is 5 
// [   {1,3,5,0,1},2,0,1] maximum = 5; 