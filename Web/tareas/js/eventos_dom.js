//EJERCICIO 1: MouseMove
// Este script muestra la posición del mouse en la pantalla cuando se mueve el cursor.

// Selecciona el elemento donde se mostrará la posición del mouse
document.addEventListener('DOMContentLoaded', () => {
    const mousePositionElement = document.getElementById('mousePosition');

    if (!mousePositionElement) {
        console.error("Elemento con ID 'mousePosition' no encontrado.");
        return;
    }

    document.addEventListener('mousemove', (event) => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        mousePositionElement.textContent = `Posición del mouse: X=${mouseX}, Y=${mouseY}`;
    });
});

