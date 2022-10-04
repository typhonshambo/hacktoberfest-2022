var arr = [32,54,12,8,4,92,1];

function bubbleSort(arr){
    for(let i=0;i<arr.length-1;i++){
        let swap=false; 
        for(let j=0;j<arr.length-2;i++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
                swap=true;
            }
        }
        if(swap==false) break 
    }
    return arr
}

console.log(bubbleSort(arr));