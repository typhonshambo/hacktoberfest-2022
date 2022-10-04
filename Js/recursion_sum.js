// function sumUp(num){
//     if(num==1) return 1 
//     return num+sumUp(num-1) 
// }
// let res = sumUp(5)
// let res1 = sumUp(99)
// console.log([res, res1])

// function fib(n){
//     if(n<=2) return 1
//     return fib(n-1)+fib(n-2)
// }
// console.log(fib(9))

// function mul(n){
//     if(n.length==0) return 1
//     console.log(n.splice(1))
//     return n[0]*mul(n.splice(1))
// }

// console.log(mul([3,5,2,8]))

// function power(num,p){
//     if(p==0) return 1
//     return num*Math.pow(num,p-1)
// }
// let r = power(3,5)
// console.log(r);