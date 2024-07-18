document.addEventListener("DOMContentLoaded", function() {
    // Set the current year
    const currentYearElement = document.getElementById("currentyear");
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    } else {
        console.error("No se encontró el elemento con ID 'currentyear'");
    }

    // Set the last modified date
    const lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = document.lastModified;
    } else {
        console.error("No se encontró el elemento con ID 'lastModified'");
    }

    // Hamburger menu functionality
   // Hamburger menu functionality
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

    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            card.querySelector('.card-inner').classList.toggle('is-flipped');
        });
    });
})