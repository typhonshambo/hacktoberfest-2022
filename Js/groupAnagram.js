function groupAnagram(str){
    let sortedStr=str.map(word=>word.split(" ").sort().join(''));
    let hash={}
    for(let i=0;i<str.length;i++){
        if(!hash[sortedStr[i]]){
            hash[sortedStr[i]]=str[i];
        } else {
            hash[sortedStr[i]].push(str[i]);
        }
    }
    console.log(hash);
    return Object.keys(hash);
}
let str = ["eat","tea","tan","ate","nat","bat"];
console.log(groupAnagram(str));
