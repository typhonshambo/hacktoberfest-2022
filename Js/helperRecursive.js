//find Odd numbers of a given array using helper recursive function  
var arr=[1,2,3,4,5,6,7,8,9,10]

function findOdd(arr){
    let result = []; 
    function helper(inputArray){
        // console.log("calling...");
        if(inputArray.length===0) return 
        if(inputArray[0]%2!==0) {
            result.push(inputArray[0]); 
        } 
        helper(inputArray.slice(1)); //recursive call
    }
    helper(arr)  //1st time calling
    return result; 
}
let res = findOdd(arr);
console.log(res);