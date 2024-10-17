/*
Escribir un programa que pida al usuario un número entero y muestre por pantalla un
triángulo rectángulo como el de más abajo, de altura el número introducido.
*
**
***
****
*****
*/

//let numeroEntero = 0;

let numeroEntero = parseInt(prompt("Ingrese un numero entero: "));

for (let index = 0; index <= numeroEntero; index++) {
    for (let index1 = 0; index1 < index; index1++) {
        document.write("*");

    }
    document.write("<br>")

}