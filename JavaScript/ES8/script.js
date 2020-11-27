// string padding - adds padding to create a total amount of spaces in a string
// .padstart();
// .padEnd();

// Trailing commas
const fun = (a,b,c,d,) => {
    console.log(a);
}

fun(1,2,3,4);

// Object methods
let obj = {
    username0: "Santa",
    username1: "Rudolph",
    username2: "Grinch",
}

// Old way - Object.keys
Object.keys(obj).forEach((key, index) => {
    console.log("keys", key, obj[key]);
})

// New way - Object.values && Object.entries
Object.values(obj).forEach(value => {
    console.log("values", value);
})

Object.entries(obj).forEach(value => {
    console.log("entries", value);
})

Object.entries(obj).map(value => {
    return value[1] + value[0].replace("username", "");
})

// ASYNC AWAIT