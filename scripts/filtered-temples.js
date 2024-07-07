//document.addEventListener("DOMContentLoaded", function() {
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
const hamButton = document.querySelector('#hamburger');
const navigation = document.querySelector('#nav-menu');

if (hamButton && navigation) {
    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
    });
} else {
    console.error("No se encontraron los elementos con ID 'hamburger' y/o 'nav-menu'");
}



// Temples array
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Barranquilla",
        location: "Barranquilla, Colombia",
        dedicated: "2018, December, 2",
        area: 25349,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/barranquilla-colombia/400x250/2-Barranquilla-Columblia-Temple-2135201.jpg"
    },
    {
        templeName: "Salt Lake",
        location: "Salt Lake City, Utah",
        dedicated: "1853, February, 14",
        area: 382207,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple5.jpg"
    },
    {
        templeName: "Manti",
        location: "Manti, Utah",
        dedicated: "1877, April, 25",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah//400x250/manti-temple-768192-wallpaper.jpg"
    }
];



const displayTemples = (filteredTemples) => {
    const div = document.getElementById("temples-container");
    if (!div) {
        console.error("No se encontró el contenedor con ID 'temples-container'");
        return;
    }

    div.innerHTML = "";

    filteredTemples.forEach(temple => {
        // Crear tarjeta
        const templeCard = document.createElement('div');
        templeCard.className = 'temple-card';

        // Nombre del templo
        const templeName = document.createElement('h2');
        templeName.textContent = temple.templeName;
        templeCard.appendChild(templeName);

        // Ubicación del templo
        const templeLocation = document.createElement('p');
        templeLocation.textContent = `Location: ${temple.location}`;
        templeCard.appendChild(templeLocation);

        // Fecha de dedicación
        const templeDedicated = document.createElement('p');
        templeDedicated.textContent = `Dedicated date: ${temple.dedicated}`;
        templeCard.appendChild(templeDedicated);

        // Área del templo
        const templeArea = document.createElement('p');
        templeArea.textContent = `Area: ${temple.area} in square feet`;
        templeCard.appendChild(templeArea);

        // Imagen del templo
        const templeImage = document.createElement('img');
        templeImage.src = temple.imageUrl;
        templeImage.alt = temple.templeName;
        templeImage.loading = 'lazy'; // Carga diferida
        
        templeCard.appendChild(templeImage);

        // Añadir la tarjeta de templo al contenedor principal
        div.appendChild(templeCard);
    });
};

// Llamar a la función para mostrar los templos
displayTemples(temples);

// Filtrar templos y agregar event listeners para los enlaces del menú
document.getElementById('home').addEventListener('click', ()=> displayTemples);
document.getElementById('old').addEventListener('click', () => {
    const oldTemples = temples.filter(temple => new Date(temple.dedicated) < new Date("1900-01-01"));
    displayTemples(oldTemples);
});

document.getElementById('new').addEventListener('click', () => {
    const newTemples = temples.filter(temple => new Date(temple.dedicated) > new Date("2000-01-01"));
    displayTemples(newTemples);
});

document.getElementById('large').addEventListener('click', () => {
    const largeTemples = temples.filter(temple => temple.area > 90000);
    displayTemples(largeTemples);
});

document.getElementById('small').addEventListener('click', () => {
    const smallTemples = temples.filter(temple => temple.area < 10000);
    displayTemples(smallTemples);
});

  
    

   
//});




