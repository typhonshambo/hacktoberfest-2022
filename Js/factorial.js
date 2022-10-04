function factorial(x) {
    if(x==0){
        return 1;
    }
    return x*factorial(x-1);
}
let data = 5;
console.log(factorial(data));

// interrnally what is happening  
// console.warn(5*factorial(5-1)*factorial(4-1)*factorial(3-1)*factorial(2-1))*factorial(1-1);
