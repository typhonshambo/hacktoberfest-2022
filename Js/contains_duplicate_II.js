let nums = [1,2,3,1]; k=3
// let nums =[1,2,3,1,2,3]; k=2

function containsDuplicates(nums,k) {
    const map = new Map();
    for(let i=0;i<nums.length;i++){
        if(map.has(nums[i])){
            const j = map.get(nums[i]);
            if(Math.abs(j-i)<=k){
                return true
            }
        }
        map.set(nums[i],i)
    }
    return false;
}

let res = containsDuplicates(nums,k);
console.log(res);