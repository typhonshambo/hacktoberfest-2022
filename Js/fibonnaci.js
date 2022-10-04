//Iterative Approach
const iterartiveFibonnaci = (no) => {
    let arr = [0,1];
    let sum = 0;
    for(let i=0;i<no;i++){
        sum = arr[i] + arr[i+1]
        arr.push(sum);
    }
    console.log(arr);
}

iterartiveFibonnaci(10);

//Recursive Approach
const recursiveFibonnaci = (no) => {
    if(no < 2){
        return 1
    }
    return recursiveFibonnaci(no-1)+recursiveFibonnaci(no-2)
}

let res = recursiveFibonnaci(4);
console.log(res)