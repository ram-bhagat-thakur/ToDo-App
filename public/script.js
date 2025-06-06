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


function validateForm() {
    const todoText = document.getElementById("ele1").value.trim();
    if (!todoText) {
        alert("Please enter a task to add");
        return false; // Stops form submission
    }
}
