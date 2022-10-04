function getCurrentPositionOfPivot(arr,left,right){
    //taking right most element as a pivot
    let pivot = arr[right];
    let currentPositionForPivotSoFar=left-1;
    //if right-1 why till right
    //reason because right most element is the point
    for(let curr=left;curr<=right-1;curr++){
        if(pivot>arr[curr]){
            currentPositionForPivotSoFar++; 
            [arr[currentPositionForPivotSoFar],arr[curr]
        ]=[
            arr[curr],
            arr[currentPositionForPivotSoFar]
        ] 
        }
    }// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
    return currentPositionForPivotSoFar+1;
}

function quickSort(arr,left,right){
    if(left>=right) return 
    let currPositionOfPivot = getCurrentPositionOfPivot(arr,left,right);
    console.log(currPositionOfPivot,">>>>>>")
    //left side of the pivot 
    quickSort(arr,left,currPositionOfPivot-1);
    
    //right side of the pivot
    quickSort(arr,currPositionOfPivot+1,right)
}

const arr=[6,3,4,6,1,7,3,9,2,8];
quickSort(arr,0,arr.length-1);
console.log(arr);

// --------------- 
function getCurrentPositionOfPivot2(arr,low,high){
    let left=low; 
    let right=high; 
    let pivot=arr[high]; 
    
    while(left<right){
    
    while(left<right && arr[left]>pivot){
        left++;  
    }
    while(left,right && arr[right]>pivot){
        right--;  
    }
    if(left<right){
        [arr[left],arr[right]]=[arr[right],arr[left]];
    }
    }
} 