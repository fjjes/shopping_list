var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value + " "));
	ul.appendChild(li);
    
    //when clicked on the new list item, go to crossOffToggle function
	li.addEventListener("click", crossOffToggle); 

	//add delete button next to the new list item
	var deleteBtn = document.createElement("button");	
	deleteBtn.appendChild(document.createTextNode("Delete"));
	li.appendChild(deleteBtn);

	//when clicked on the "delete" button of new list item, go to deleteItem function
	deleteBtn.addEventListener("click", deleteItem);
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

//when clicked on "delete" button of existing list item, go to deleteItem function
var deleteBtns = document.getElementsByClassName("delete");
for(var i=0; i< deleteBtns.length; i++){
	deleteBtns[i].addEventListener("click", deleteItem);
}

//delete item with the "delete" button
function deleteItem(event){
	event.target.parentNode.remove();
}

//when clicked on existing list item, go to crossOffToggle function
var listItem =document.getElementsByTagName("li")
for (var i=0; i<listItem.length ; i++ ){
	listItem[i].addEventListener("click", crossOffToggle);
}

//crossOffToggle function
function crossOffToggle(event){
	event.target.classList.toggle("done");
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

