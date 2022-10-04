// understand debugger 
// How js works(Call Stack Main)
// Head Recursion  
// Tail Recursion


// ------------------- 
// Debugger  
// function colors(){
//     let data = 20; 
//     console.log(data); 
// };
// function days(){
//     colors();
// };
// function fruits(){
//     days();
// }; 
// function topFunctions(){
//     fruits();
// };
// topFunctions();

// ------------------- 
// Head and Tail 
function test(x){
    console.log(x);
    if(x>0) return test(x-1);
} 
test(5);
console.log(x)