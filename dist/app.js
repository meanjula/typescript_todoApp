"use strict";
const input = document.querySelector(".new-list");
const addButton = document.querySelector(".add-item");
const listGroup = document.querySelector(".list-group");
const clearButton = document.querySelector("#clear");
const completeButton = document.querySelector(".complete-btn");
//function for adding list items
function addList() {
    listGroup.insertAdjacentHTML("beforeend", `<li class="newlist"><p>${input.value}</P> 
		<button type="button" class="trash-btn"><i class="fa fa-trash"></i></button>
		<button type="button" class="complete-btn"><i class="fa fa-check"></i></button>
	  </li>`);
    input.value = ""; //clears input field after
}
//click event call the add list function 
addButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value != "") {
        addList();
        const listItems = document.querySelectorAll("li");
        listItems.forEach((item) => {
            //if item exists in to do list 
            if (item) {
                //clicking trash button triggers the remove function
                item.addEventListener("click", (e) => {
                    const clickedbtn = e.target;
                    if (clickedbtn.className === "trash-btn") {
                        const parentElem = clickedbtn.parentElement;
                        console.log(parentElem);
                        parentElem.classList.add("fall");
                        parentElem.addEventListener("transitionend", function () {
                            parentElem.remove();
                        });
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
clearButton.addEventListener("click", (e) => {
    e.preventDefault();
    listGroup.innerHTML = "";
});
