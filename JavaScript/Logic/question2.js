// Accepts an Array and a number as a parameter 
// returns the numebrs in the array that add up to equal the number
let numbers = [1, 2, 3, 4, 6, 7, 10]; 

const targetArray = (arr, target) => {
    let sum = [];
        debugger;
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] + arr [j] === target) {
                    sum.push(i);
                    sum.push(j);
                }
                // Break out of loop so it only returns the first set of nums
                break;
            }
        }
    return sum;
}

console.log(targetArray(numbers, 10));