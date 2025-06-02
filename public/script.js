document.querySelectorAll(".checkbox").forEach(checkbox => {
    checkbox.addEventListener("click", function () {
        var text = this.nextElementSibling; // Get the corresponding text element
        text.style.textDecoration = this.checked ? "line-through" : "none";
    });
});
document.querySelectorAll(".delete").forEach(deleteButton => {
    deleteButton.addEventListener("click", function () {
        var todoItem = this.closest("li");
        todoItem.remove();
    });

});


document.querySelectorAll(".edit").forEach(editButton => {
    editButton.addEventListener("click", function () {
        var todoItem = this.closest("li");
        var textElement = todoItem.querySelector("#update");
        var checkbox = todoItem.querySelector(".checkbox");
        var checkText = todoItem.querySelector("h4"); // Get the correct text element

        if (this.innerText === "Edit") {
            this.innerText = "Save";
            textElement.readOnly = false;
            textElement.focus();
            checkbox.disabled = true; // Disable the checkbox while editing
        } else {
            this.innerText = "Edit";
            textElement.readOnly = true;
            checkbox.disabled = false; // Enable the checkbox after editing
            checkText.innerText = textElement.value; // Update the h4 text with the new value
        }
    });
});

document.querySelectorAll(".filter a").forEach(filterLink => {
    filterLink.addEventListener("click", function (event) {
        event.preventDefault();
        let priority = this.innerText.toLowerCase();
        
        document.querySelectorAll("li").forEach(li => {
            let itemPriority = li.querySelector(".priority").value.toLowerCase();
            li.style.display = priority === "all" || itemPriority.includes(priority) ? "block" : "none";
        });
    });
});
