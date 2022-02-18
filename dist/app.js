"use strict";
const input = document.querySelector(".new-list");
const addButton = document.querySelector(".add-item");
const listGroup = document.querySelector(".list-group");
const clearButton = document.querySelector("#clear");
const completeButton = document.querySelector(".complete-btn");
function addList() {
    listGroup.insertAdjacentHTML("beforeend", `<li class="newlist"><p>${input.value}</P> 
		<button type="button" class="trash-btn"><i class="fa fa-trash"></i></button>
		<button type="button" class="complete-btn"><i class="fa fa-check"></i></button>
	  </li>`);
    input.value = ""; //clears input field after
}
addButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value != "") {
        addList();
        const listItems = document.querySelectorAll("li");
        listItems.forEach((item) => {
            if (item) {
                item.addEventListener("click", (e) => {
                    const clickedbtn = e.target;
                    if (clickedbtn.className === "trash-btn") {
                        item.remove();
                    }
                    else if (clickedbtn.className === "complete-btn") {
                        item.classList.toggle("completed");
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
