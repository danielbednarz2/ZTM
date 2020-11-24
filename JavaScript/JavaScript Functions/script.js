    /* KEYLESS CAR
let age = prompt("Age: ");
age = Number(age);
if (age < 18) {
    alert("Sorry, you are too young to drive this car. Powering off");
} else if (age === 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
} else if (age > 18) {
    alert("Powering On. Enjoy the ride!");
} else {
    alert("That is not a number")
}
    */

function sayHello() {
    console.log("Hello");
}
sayHello();

let sayBye = function () {
    console.log("Bye");
}
sayBye();

/* ORIGINAL SING FUNCTIONS
function sing() {
    console.log("AH");
    console.log("TEE");
}
sing();

function sing2() {
    console.log("NO");
    console.log("THIS IS BETTER");
}
sing2(); 
*/

// HOW PARAMETERS / ARGUMENTS MAKE FUNCTIONS EASEIR
function sing(firstLine, secondLine) {
    console.log(firstLine);
    console.log(secondLine);
}
sing("Hello", "You are beautiful");
sing(1, 2);

//RETURNING FROM A FUNCTION
function multiply (a, b) {
    return a * b;
}
multiply(5, 10);

// MAKE KEYLESS CAR BETTER WITH A FUNCTION
function checkDriverAge (age) {
    age = Number(age);
    if (age < 18) {
        console.log("Sorry, you are too young to drive this car. Powering off");
    } else if (age === 18) {
        console.log("Congratulations on your first year of driving. Enjoy the ride!");
    } else if (age > 18) {
        console.log("Powering On. Enjoy the ride!");
    } else {
        console.log("That is not a number");
    }
}
checkDriverAge(20);
checkDriverAge(18);
checkDriverAge(12);
checkDriverAge("Hello");