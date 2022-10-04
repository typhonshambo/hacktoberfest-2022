// swap two numbers without using third varable 
let a=2,b=5;
// ====method1===
// a,b=b,a  
// console.log(a,b)  
// ====method2===this method used to swap numbers only
// a=a+b; 
// b=a-b; 
// a=a-b; 
// console.log(a,b);

// reverse the array without using an extra array 
// function reverseArray(){
//     let arr=[1,2,3,4,5,6,7,8];
//     let left=0;right=arr.length-1;
//     while(left<=right){
//         //swap two elements
//         [arr[left],arr[right]]=[arr[right],arr[left]];
//         left++;
//         right--
//     }
//     console.log(arr)
// } 
// reverseArray();

// returned the most frequency element in an array 
function mostFrequency(){
    let map = new Map();
    let arr=[1,2,2,3,4,2,5,1,2,3];
    if(!arr.length) return null
    let maxFreq=0,maxFreqEle=null;
    for(let i=0;i<arr.length;i++){
        if(map.get(arr[i])){
            map.set(arr[i],map.get(arr[i])+1);
            if(maxFreq<map.get(arr[i]));
            maxFreq=map.get(arr[i]); 
            maxFreqEle=arr[i]   
        } else {
            map.set(arr[i],1)
        }
    }
    console.log(maxFreqEle,maxFreq)
} 
mostFrequency();

// maximum sum of any elements in an array 
function largestTwoNumberSum(){
    let arr=[4,8,5,3,6,1,2,3,9];
    let firstMax=arr[0];
    let secondMax=-Infinity;  
    for(let i=0;i<arr.length;i++){
        if(arr[i]>=firstMax){
            secondMax=firstMax;
            firstMax=arr[i];
        } else if(arr[i]>secondMax){
            secondMax=arr[i];
        }
    }
    console.log(firstMax+secondMax);
} 
largestTwoNumberSum();

// rotate an array by k elements  
// [1,2,3,4,5], k=2
// firstRotation = [5,1,]  

function rotateArray(arr,k){
    let temp=(new Array(arr.length)).fill(0);
    for(let i=0;i<arr.length;i++){
        let shiftIndex=(i+k)%arr.length;
        temp[shiftIndex=arr[i]];   
    }
    for(let i=0;i<arr.length;i++){
        arr[i]=temp[i]
    }
}

// -------------
function reverseArray2(arr,left,right){
    while(left<right){
        //swap two elements 
        [arr[left],arr[right]]=[arr[right],arr[left]];
        right++ 
        left--  
    }
}

function optimalKRotation(arr,k){
    reverseArray2(arr,0,arr.length-1);
    reverseArray2(arr,k-1);
    reverseArray2(arr,k,arr.length-1);
}
optimalKRotation(arr,1)