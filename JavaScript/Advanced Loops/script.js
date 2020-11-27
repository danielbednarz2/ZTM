const basket = ["apples", "oranges", "grapes"];
const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000
}

//for
for (let i = 0; i < basket.length; i++) {
    console.log("for", basket[i]);
}

console.log();

//forEach
basket.forEach(item => console.log("forEach", item))

console.log();

//for of
for (item of basket) {
    console.log("for of", item);
}

console.log();

//for in - Objects not iterable, but enumerable
for (item in detailedBasket) {
    console.log("for in", item)
}