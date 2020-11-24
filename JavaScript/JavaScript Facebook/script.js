// Create Facebook Functions Exercise - updated with loops

let database = [
    {
        username: "Daniel",
        password: "Walker"
    },
    {
        username: "Dorothy",
        password: "Walker"
    },
    {
        username: "Rose",
        password: "Walker"
    }
];

let newsfeed = [
    {
        username: "Dorothy",
        timeline: "My First Name"
    },
    {
        username: "Rose",
        timeline: "My Middle Name"
    },
    {
        username: "Walker",
        timeline: "My Last Name"
    }    
];

let userNamePrompt = prompt("What's your Username?");
let passwordPrompt = prompt("What's your password?");

function isUserValid (usern, pass) {
    for (let i = 0; i < database.length; i++)
        if (database[i].username === usern &&
            database[i].password === pass) {
                return true;
            }
        return false;
}

function signIn(usern, pass) {
    if (isUserValid(usern, pass)) {
        console.log(newsfeed);
    } else {
        alert("Sorry, wrong username or password");
    }

    // if (usern === database[0].username && 
    //     pass === database[0].password) {
    //     console.log(newsfeed);
    // } else {
    //     alert("Sorry Wrong Information");
    // }

}

signIn(userNamePrompt, passwordPrompt);

