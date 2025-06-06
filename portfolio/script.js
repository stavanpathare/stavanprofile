const toggleButton = document.getElementById("darkModeToggle");

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Change button icon
    if (document.body.classList.contains("dark")) {
        toggleButton.textContent = "☀️";
        toggleButton.style.background = "black";
        toggleButton.style.color = "white";
    } else {
        toggleButton.textContent = "🌙";
        toggleButton.style.background = "white";
        toggleButton.style.color = "black";
    }
});
