// Clean the room function:
let array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20, "2", "2", "1"];

// Sort the array ascending
const sortedArray = [...array].sort((a,b) =>  a - b);


// Push matching indexes into an array
const sortedObject = sortedArray.reduce((acc, index) => {
    if (acc[index]) {
        acc[index] += 1;
    } else {
        acc[index] = 1;
    }
    return acc
}, {});

let finalArray = Object.keys(sortedObject).map(x => sortedObject[x] > 1 ? new Array(sortedObject[x]).fill(+x) : Number(x));

console.log(finalArray);
// Store the same values in an individul array

