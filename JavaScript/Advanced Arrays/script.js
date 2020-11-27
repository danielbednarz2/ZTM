// Advanced Array

const array = [1, 2, 10, 16];
const double = [];
const newArray = array.forEach(num => {
    double.push(num * 2);
});

console.log("forEach", double);

// Map
const mapArray = array.map(num => num * 2);

console.log("map", mapArray);

// Filer
const filterArray = array.filter(num => num > 5);

console.log("filter", filterArray);

// Reduce
const reduceArray = array.reduce((acc, num) => {
    return acc + num;
}, 0)

console.log("reduce", reduceArray);