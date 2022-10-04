function three(n){
    if(n<1) return false  
    while(n%3==0){
        console.log(n /=3)
    } 
    return n==1
}

let res=three(81)
console.warn(res)