function findNumbers(A, arraysize, sum) 
{
    let l, r; 
    for (let i = 0; i < arraysize - 2; i++) 
    { 
        for (let j = i + 1; j < arraysize - 1; j++) 
        { 
            // iterate and validate third num
            for (let k = j + 1; k < arraysize; k++) 
            { 
                if (A[i] + A[j] + A[k] == sum) 
                { 
                    console.log("Triplet is " + A[i] +  ", " + A[j] + ", " + A[k]); 
                    return true; 
                } 
            } 
        } 
    } 
    // retrun false if not found
    return false; 
} 

console.log(findNumbers([ 1, 40, 45, 6 ],4,22));