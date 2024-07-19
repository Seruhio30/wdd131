document.addEventListener("DOMContentLoaded", function() {
    // Inicializar elementos
    initializeYear();
    initializeLastModified();
    setupHamburgerMenu();
    setupCardFlip();
    setupScrollButton();
    initializeStoredData();
});

function initializeYear() {
    const currentYearElement = document.getElementById("currentyear");
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    } else {
        console.error("No se encontró el elemento con ID 'currentyear'");
    }
}

function initializeLastModified() {
    const lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = document.lastModified;
    } else {
        console.error("No se encontró el elemento con ID 'lastModified'");
    }
}

function setupHamburgerMenu() {
    const hamButton = document.querySelector('#hamburger');
    const navigation = document.querySelector('#nav-menu');

    if (hamButton && navigation) {
        hamButton.addEventListener('click', () => {
            navigation.classList.toggle('open');
            hamButton.classList.toggle('open');
        });

        // Close menu when clicking outside of it
        document.addEventListener('click', (event) => {
            if (!navigation.contains(event.target) && !hamButton.contains(event.target)) {
                navigation.classList.remove('open');
                hamButton.classList.remove('open');
            }
        });
    } else {
        console.error("No se encontraron los elementos con ID 'hamburger' y/o 'nav-menu'");
    }
}

function setupCardFlip() {
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            card.querySelector('.card-inner').classList.toggle('is-flipped');
        });
    });
}

function setupScrollButton() {
    const scrollButton = document.getElementById("more-info");
    if (scrollButton) {
        scrollButton.addEventListener('click', function (){
            window.location.href = 'secondaryPage.html#backPack72';
        });
    } else {
        console.error("No se encontró el elemento con ID 'more-info'");
    }
}

function initializeStoredData() {
    // Retrieve stored user preferences from localStorage
    const userPreferences = JSON.parse(localStorage.getItem('userPreferences')) || {};
    const theme = userPreferences.theme || 'light';

    // Apply theme based on stored preference
    document.body.classList.toggle('dark-theme', theme === 'dark');

    // Example of storing new data in localStorage
    const saveButton = document.getElementById('save-preferences');
    if (saveButton) {
        saveButton.addEventListener('click', () => {
            const newTheme = document.querySelector('input[name="theme"]:checked').value;
            localStorage.setItem('userPreferences', JSON.stringify({ theme: newTheme }));
            document.body.classList.toggle('dark-theme', newTheme === 'dark');
        });
    } else {
        console.error("No se encontró el botón para guardar preferencias");
    }
}
