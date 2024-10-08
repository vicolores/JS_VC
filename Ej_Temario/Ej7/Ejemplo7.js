var numeroUsuario = Number(prompt("Introduce un número"));

var factorial = 1; // Inicializamos factorial en 1

for (let index = 1; index <= numeroUsuario; index++) {
    
    factorial *= index; // Multiplicamos factorial por el índice actual
}

alert("El factorial de " + numeroUsuario + " es " + factorial);