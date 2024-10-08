/*
Escribir un programa que pida al usuario un número entero y muestre por pantalla un 
triángulo rectángulo como el de más abajo, de altura el número introducido.
Introduce la altura del triángulo (entero positivo): 9
1
1 3
1 3 5 
1 3 5 7
1 3 5 7 9

*/

let numeroEntero = parseInt(prompt("Ingrese un numero entero: "));
var sumatorio = 0;

for (let index = 0; index <= numeroEntero; index++) {
  for (let index1 = 0; index1 < index; index1++) {
    sumatorio = index1 * 2 + 1;
    document.write(sumatorio);

  }
  if (sumatorio == 9) {
    break;
    
  }
  document.write("<br>")

}