var nums=[1,2,3,4,5,6,7],k=3;
function reverse(nums,left,right){
    while(left<right){
        [nums[left],nums[right]]=[nums[right],nums[left]]; 
        left++
        right--    
    }
}

function rotate(nums,k){
    k %= nums.length;
    reverse(nums,0,nums.length-1);
    reverse(nums,0,k-1);  
    reverse(nums,k,nums.length-1);
}

rotate(nums,k);
console.log(nums);

// S.C=>O(1), T.C=>O(n)  