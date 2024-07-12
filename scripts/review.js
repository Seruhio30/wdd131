document.addEventListener("DOMContentLoaded", function() {
    // Obtener el contador actual de localStorage
    let reviewCount = localStorage.getItem('reviewCount');

    // Si no existe, inicializarlo a 0
    if (reviewCount === null) {
        reviewCount = 0;
    } else {
        // Convertirlo a número
        reviewCount = parseInt(reviewCount, 10);
    }

    // Incrementar el contador
    reviewCount += 1;

    // Guardar el nuevo valor en localStorage
    localStorage.setItem('reviewCount', reviewCount);

    // Mostrar el contador en la página
    const reviewCountElement = document.getElementById('reviewCount');
    if (reviewCountElement) {
        reviewCountElement.textContent = reviewCount;
    } else {
        console.error("No se encontró el elemento con ID 'reviewCount'");
    }
});
