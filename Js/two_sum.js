let nums = [6,7,3,5,4];
let target = 11;

for(let i=0; i<nums.length; i++) {
    for(let j=i+1; i<nums.length; j++) {
        if(nums[i] + nums[j] === target) {
            console.log([i,j])
            return [i,j];
        }
    }
}
// time complexicity is O(n^2);