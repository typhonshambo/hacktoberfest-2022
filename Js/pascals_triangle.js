function generate(numRows){
    if(numRows < 1){return []};
    if(numRows === 1){return [[1]]};
    let triangle = [[1]];
    for(let i=1;i<numRows;i++){
        let prevRows = triangle[i-1]
        let curRow = [];
        curRow.push(1)
        for(let j=1;j<prevRows.length;j++){
            curRow[j]=prevRows[j]+prevRows[j-1]
        }
        curRow.push(1)
        triangle.push(curRow)
    }
    return triangle;
}

let res = generate(5);
console.log(res);
