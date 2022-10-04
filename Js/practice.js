// var x = 3;
// x = 6;
// console.log(x);

// let a = 5;
// a = 7;
// const b = 10;
// console.log(a);

// function abc() {
//   var ab = null;
//   ab = 7;
//   axy = "7";
//   let z = ab === axy;
//   console.log(z);
//   return ab;
// }
// console.log(abc());

// function getFee(isMember) {
//   return isMember ? "2.00" : "10.00";
// };

// var x=7;
// x=""+7;
// let y="100"-10;
// console.log(typeof y);


// var arr=[1,2,1,2,1,1,2];
// function a(arr){
//     if(arr.length ==0) return 0
//     let even=0,odd=0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2==0) even+=i
//         else odd++
//     }
//     return `count of even is ${even}, and count of odd is ${odd}`;
// }
// console.log(a(arr))







// console.log(getFee(true));
// // expected output: "$2.00"

// console.log(getFee(false));
// // expected output: "$10.00"

// console.log(getFee(null));


// call, apply and bind    
let obj = {
    name:"Rahul",
    roolno:454,
    age:24,
};
let getInfo= function(state,country,district){
    console.log(this+" "+state+" "+country+" "+district);
}
getInfo.call(obj,"bangalore","India","gujrat");

let obj2={
    name:"Meeshi",
    rollNo:"fn-rad-17TSO",
    age:23,
};
// call   
// getInfo.call(obj2,"bangalore","India")
// apply  
// getInfo.apply(obj2,["bangalore","India","Jharkhand"]);
//bind
let fun=getInfo.bind(obj2,"bangalore","India","Jharkhand");
fun();

// obj4={a:10}
// const obj5={...obj4}
// obj5.a=20
// console.log(obj4) 
// console.log(obj5)
// let obj4;  

// const mul=(a)=>{
//     return (b)=>{
//         return (c)=>{
//             return a*b*c
//         }
//     }
// }
// console.log(mul(2)(3)(4));

