// Closures - child scopes will always have access to the variables of the parent scope, but not vice versa.

const first = () => {
    const greet = "Hi";
        const second = () => {
            alert(greet);
        }
    return second;
}

const newFunc = first();
newFunc();

// Currying 

const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5);

curriedMultiply(3)(4);
// created the constant a always being 5 and the second input goes into the b constant or the second function
multiplyBy5(5);

// Compose

const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num +1;

compose(sum, sum)(5);

// Avoiding side effects nad functional purity 

// Functions that changes something outside of the function
let d = 1;
const e = () => d = 2;

e();

// Deterministic functions always return the same value