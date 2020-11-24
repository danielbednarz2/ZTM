let button = document.getElementById("enter");
let input = document.getElementById("user_input");
let ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
} 

//
function createListElement() {  
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

// Creates new list item when you click "Click Me"
function addListAfterClick(event) { 
    if (inputLength() > 0 )
        createListElement();
}

// Creates new list item if enter key is pressed
function addListAfterKeypress() {  
    if (inputLength() > 0 &&
        event.keyCode === 13)         // Allows you to hit the enter key to submit
            createListElement();
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);     // listens for a keypress when you're in the input (ID = user_input) portion of the page
