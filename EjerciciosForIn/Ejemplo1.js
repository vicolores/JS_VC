var numeroUsuario = []; // Inicializa un array vacío

var cantidadNumeros = Number(prompt("¿Cuántos números deseas ingresar?"));

for (let i = 0; i < cantidadNumeros; i++) {
    numeroUsuario.push(Number(prompt("Introduce un número")));
}

for (i in numeroUsuario) {

    alert(numeroUsuario[i] * 3); 
}


//alert("El factorial de " + numeroUsuario + " es " + factorial);