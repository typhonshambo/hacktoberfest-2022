// function sumZero(arr){
//     let result = [];
//     let distance = Infinity;
//     let j=arr.length-1;
//     let i=0;
//     while(i<j){
//         if(absolute(arr[i]+arr[j]-12)<distance){
//             result=arr[i]+arr[j]
//             distance = absolute(arr[i]+arr[j]-12)
//         }   
//         if(arr[i]+arr[j]-12>0){j=j-1}
//         else(arr[i]+arr[j]-12<0){i=i+1}
//     }
//     return result;
// }