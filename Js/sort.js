// We have given an array as input containing 0's and 1's we need to sort an array  
var nums = [0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1];

// count0,count1,curr 

// function sort01(arr){
//     let left=0;
//     let right=arr.length-1; 
//     while(arr[left]==0 && left<right)  left++;
//     while(arr[right]==1 && left<right) right--;
//     if(left<right){
//         arr[left]=0
//         arr[right]=1
//         left++; 
//         right--; 
//     }
//     return arr
// }

function sort01(nums){
    let left=0,right=nums.length-1,i=0;
    while(i<=right){
        if(nums[i]===0) swap(nums,i++,left++);
        // else if(nums[i]===1) swap(nums,i,left--)
        else i++
    }
    return nums;
}

var swap = function(nums,start,end){
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
}
console.log(sort01(nums));