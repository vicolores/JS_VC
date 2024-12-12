// Función para gestionar la limitación de caracteres y actualizar el contador
function limita(maximoCaracteres, evento) {
    var elemento = document.getElementById("texto");
    var contador = document.getElementById("contador");

    // Permitir teclas especiales
    var teclasEspeciales = ["Backspace", "Delete", "ArrowLeft", "ArrowRight"];
    if (teclasEspeciales.includes(evento.key)) {
        return true;
    }

    // Comprobar el límite de caracteres
    if (elemento.value.length >= maximoCaracteres) {
        evento.preventDefault();
        return false;
    }

    // Actualizar contador
    contador.textContent = `Caracteres restantes: ${maximoCaracteres - elemento.value.length - 1}`;
    return true;
}

// Evento para actualizar el contador al inicializar
window.onload = function() {
    var maximoCaracteres = 100;
    var elemento = document.getElementById("texto");
    var contador = document.getElementById("contador");

    // Configurar contador inicial
    contador.textContent = `Caracteres restantes: ${maximoCaracteres}`;

    // Actualizar el contador en tiempo real
    elemento.addEventListener("input", function() {
        contador.textContent = `Caracteres restantes: ${maximoCaracteres - elemento.value.length}`;
    });
};