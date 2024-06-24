document.addEventListener("DOMContentLoaded", function() {
    // Set the current year
    document.getElementById("currentyear").textContent = new Date().getFullYear();

    // Set the last modified date
    document.getElementById("lastModified").textContent = document.lastModified;

    
});

const hamButton = document.querySelector('#hamburger');
const navigation = document.querySelector('#nav-menu');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});
