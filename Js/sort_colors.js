function colors(nums){
    let right=0,left=nums.length-1,i=0;
    while(i<=left){
        if(nums[i]===0) swap(nums,i++,right++)
        else if(nums[i]===2) swap(nums,i,left--)
        else i++ 
    }
    return nums
}

var swap = function(nums,start,end){
    let temp = nums[start];
    nums[start] = nums[end]
    nums[end] = temp
}

let nums= [0,2,1,1,2,0]
let res = colors(nums);
console.log(res);