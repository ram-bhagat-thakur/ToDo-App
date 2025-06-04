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
