var numeros = [];
var mayorOcho = 0;
var sumaNumeros = 0;
var numerosArray = 0;

prompt("Introduce 5 números: ");
for (let index = 0; index <= 4; index++) {
    numeros[index] = Number(prompt("Introduce el número " + (index+1)));
    numerosArray = numeros[index];

    if (numerosArray > 8) {
        sumaNumeros += numerosArray;
    }
    
}
document.write("La suma de los números es " + sumaNumeros);
