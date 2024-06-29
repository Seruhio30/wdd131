document.addEventListener("DOMContentLoaded", function() {
    // Set the current year
    document.getElementById("currentyear").textContent = new Date().getFullYear();

    // Set the last modified date
    document.getElementById("lastModified").textContent = document.lastModified;
});

