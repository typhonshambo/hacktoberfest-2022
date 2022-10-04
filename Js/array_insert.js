// ========> Insert Element into an array <========== 

let arr = [60,30,10,67,40];

let newEl = 70;
let position = 2;
for(let i=arr.length-1;i>=0;i--) {
    console.table(arr[i]);
    if(i>=position){
        arr[i+1]=arr[i];
        if(i == position){
            arr[i]=newEl;
        }
    }
}
console.table(arr)
// arr.splice(position,0,newEl);      //using higher order function

// ---------------------------  
let data = [3,6,7,1,99,67];
let insert = 80; 
let ele = 3;
for(let i=data.length-1;i>=0;i--){
    if(i>=ele){
        data[i+1]=data[i]
        if(i==ele){
            data[i]=insert;  
        }
    }
}
console.log(data)

