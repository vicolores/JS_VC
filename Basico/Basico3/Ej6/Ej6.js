/*
Solicitar al usuario que ingrese los nombres de dos personas, los cuales se almacenarán en 
dos variables. A continuación, imprimir “coincidencia” si los nombres de ambas personas 
comienzan con la misma letra ó si terminan con la misma letra. Si no es así, imprimir “no hay 
coincidencia”.

*/
let nombre1 = prompt("Ingrese el nombre de la primera persona");
let nombre2 = prompt("Ingrese el nombre de la segunda persona");

if (nombre1.charAt(0) == nombre2.charAt(0) || nombre1.charAt(nombre1.length - 1) == nombre2.charAt(nombre2.length - 1)) {
    document.write("Coincidencia");
} else {
    document.write("No hay coincidencia");
}