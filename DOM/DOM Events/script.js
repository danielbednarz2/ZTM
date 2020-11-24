let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");
let items = document.getElementsByTagName("li");
let del = document.getElementsByClassName("delete");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	let li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

for(let i = 0; i < items.length; i++) {
	items[i].addEventListener("click", addStyleDone);
}

function addStyleDone(event) {
	let e = event.target;
	e.removeEventListener("click", addStyleDone);
	
}

for(let i = 0; i < del.length; i++) {
	del[i].addEventListener("click", removeParent);
}

function removeParent(event) {
	let e = event.target;
	e.removeEventListener("click", removeParent);
	e.parentNode.remove();
  }


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

items.addEventListener("click", addStyleDone);