let s="babad"
// let s="cbbd"
// let s="a"
var longestPalindrome = function(s) {
    let max=''
    if(s==null || s.length<1) return ""; 
    for(let start=0;start<s.length;start++){
        let begin = helper(s,start,start);
        let end = helper(s,start,start+1); 
        let currMax = begin.length>=end.length ? begin : end;
        max = currMax.length>max.length ? currMax : max;
    }
    return max;
};

var helper = function(s,begin,end){
    let curr =''
    while(begin>=0 && end<s.length && s.charAt(begin)==s.charAt(end)){
        curr = s.substring(begin,end+1);
        begin-=1;
        end+=1;
    }
    return curr;
}