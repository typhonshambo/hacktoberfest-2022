// MERGE SORT (DIVIDE AND CONQUERER TECHNIQUE)   

let arr=[233,12,6,3,89];

// [6,12,233]  <--merge--> [3,34,65,89]

// step1: RECURSION 
// step2: Merge 
//First we will try to break this array in two half then we have a left half and a right half then we will break left and right recursively.

function mergeSort(arr,start,end){
    if(start>= end) return 
    let mid=Math.floor(start+end)/2;
    mergeSort(arr,start,mid);
    mergeSort(arr,mid-1,end); 
    merge(arr,start,mid,end);    
}

function merge(arr,start,mid,end){
    let arr1=[], arr2=[];
//logic 
// step1: we will first try to find the length of a given array  
// arr1: [start, ...mid];
// arr2: [mid+1,...end];    
    let lengthArr1=mid-start+1;  
    let lengthArr2 = end-mid;

    // copy the data in the respective arrays
    for(let i=0;i<lengthArr1;i++){
        arr1[i]=arr[start+1];
    }
    for(let j=0;j<lengthArr1;j++){
        arr2[j]=arr[mid+1+j];
    }

    let a=0;  //index of arr1 
    let b=0;  //index of arr2

    let c=start; // index of arr 
    while(a<lengthArr1 && b<lengthArr2){
        if(arr1[a]<= arr[b]){
            arr[c] = arr1[a]
            a++;
        } else {
            arr[c] = arr2[b];
            b++
        }
        c++;
    } 

    //if element remains in either arr1 or arr2, then we will try to insert them order in an original array 
    while(a<lengthArr1){
        arr[c]=arr1[a]; 
        a++; 
        c++;    
    }
    while(b<lengthArr2){
        arr[c]=arr2[b];
        b++; 
        c++;    
    }
}

// Time complexicity of merge sort ==> o(N LogN);
// because we break the array into two halfs  
// best case, average case, worst case same complexity which is O(N logN);


