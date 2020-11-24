let todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
]

// Adds an exclamation point to the end of the string at Array[i]
for (let i = 0; i < todos.length; i++) {
    todos[i] = todos[i] + "!";
}

// Removes the last element from the todo list

let todosLength = todos.length;
for (let i = 0; i < todosLength; i++) {
    todos.pop();
}

let counterOne = 0;
while (counterOne < 10) {
    console.log(counterOne);
    counterOne++;
}

