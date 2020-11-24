let listOfAnimals = ["tiger", "cat", "bear", "bird"];
let listOfOthers = ["bee", "deer"];

console.log(listOfAnimals);

listOfAnimals.shift();

console.log(listOfAnimals);

listOfAnimals.pop();

console.log(listOfAnimals);

listOfAnimals.push("elephant");

console.log(listOfAnimals);

let combined = listOfAnimals.concat(listOfOthers);

console.log(combined);

console.log(listOfAnimals);

let array = ["Banana", "Apples", "Oranges", "Blueberries"];

array.shift(); //Remove Banana
array.sort(); //Alphebetical sort
array.push("Kiwi"); //Add Kiwi to the end
array.shift(); //Remove Apples
array.reverse(); //Reverse the order of the array
console.log(array);


// ACCCESSING AN OBJECT INSIDE MULTIPLE ARRAYS
let array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(array2[1][1][0]);

// Create an Object with properties
let user = {
    name: "John",
    age: 34,
    hobby: "Soccer",
    isMarried: false
};

console.log(user.name);
console.log(user.age);

user.favoriteFood = "Spinach"; // Add new property
console.log(user.favoriteFood);

user.isMarried = true; // Change an existing property
console.log(user.isMarried);
console.log(user);

user.spells = ["abrakadabra", "shazam", "wingardium leviosa"]; //Add an Array to an Object
console.log(user);

// Create an Array of Objects
let userList = [
    {
        username: "andy",
        password: "secret"
    },
    {
        username: "jess",
        password: "123"
    }
]
console.log(userList);

console.log(user.spells[2]); //Access the 3rd element in the spells Array of the user Object
console.log(userList[0].password); //Acces the password property of the 1st element of the Array userList 

// Adding a Method, or functions inside of an object
user.shout = function() {
    console.log("AH");
}

user.shout();