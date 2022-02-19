"use strict";

const input = document.querySelector(".new-list") as HTMLInputElement;
const addButton = document.querySelector(".add-item") as HTMLButtonElement;
const listGroup = document.querySelector(".list-group") as HTMLOListElement;
const clearButton = document.querySelector("#clear") as HTMLButtonElement;
const completeButton = document.querySelector(".complete-btn")as HTMLButtonElement;

//function for adding list items
function addList() {
	listGroup.insertAdjacentHTML(
	  "beforeend",
	  `<li class="newlist"><p>${input.value}</P> 
		<button type="button" class="trash-btn"><i class="fa fa-trash"></i></button>
		<button type="button" class="complete-btn"><i class="fa fa-check"></i></button>
	  </li>`
	);
	input.value = ""; //clears input field after
  }
  
  //click event call the add list function 
  addButton.addEventListener("click", (e:Event) => {
	e.preventDefault();
	if (input.value != "") {
	  addList();
	  const listItems = document.querySelectorAll("li");
	  listItems.forEach((item) => {
		  //if item exists in to do list 
		if (item ) {
			//clicking trash button triggers the remove function
		  item.addEventListener("click", (e:Event) => {
		 	const clickedbtn = <HTMLButtonElement>e.target;
			
			 if (clickedbtn.className === "trash-btn") {
				const parentElem= <HTMLElement>clickedbtn.parentElement;
				console.log(parentElem)
			parentElem.classList.add("fall") ;
			   parentElem.addEventListener(
				 "transitionend",
				 function () {
				   parentElem.remove();
				 }
			   );
			 }
		
			if (clickedbtn.className === "complete-btn") {
				item.style.textDecoration = "line-through";
				item.style.opacity = "0.4";
			}
		   });
		 }
	  });
	}
  });
  clearButton.addEventListener("click", (e:Event) => {
	  e.preventDefault();
	listGroup.innerHTML = "";
  });
  