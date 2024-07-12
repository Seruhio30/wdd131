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

    const products = [
      {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
      },
      {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
      },
      {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
      },
      {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
      },
      {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
      }
  ];


  const selectProduct = document.getElementById('product-select');

  products.forEach(product => {
      const option = document.createElement('option');
      option.value = product.id;
      option.textContent =  `${product.name} (Rating: ${product.averagerating})`;
      selectProduct.appendChild(option);
  });

});