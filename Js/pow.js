var myPow = function(x, n) {
    if(n===0) return 1
    let pow = Math.abs(n)
    if(pow%2===0){
    let small = myPow(x*x,pow/2)
    console.log(small)
}
    let res = pow%2===0 ? myPow(x*x,pow/2) : myPow(x*x,(pow-1)/2) *x
    return n < 0 ? 1/res : res
}
let x=2.00000, n=10;
let res = myPow(x,n)
console.log(res)