/*
Escribir un programa que solicite al usuario una letra y, si es una vocal, muestre el mensaje 
“es vocal”. Se debe validar que el usuario ingrese sólo un carácter. Si ingresa un string de más 
de un carácter, informarle que no se puede procesar el dato
*/
let letra = prompt("Ingrese una letra");
if (letra.length > 1) {
    alert("No se puede procesar el dato");
} else {
    if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
        alert("Es vocal");
    } else {
        alert("No es vocal");
    }
}