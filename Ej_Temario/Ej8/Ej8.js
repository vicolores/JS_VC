/*
Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve
como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el
resultado devuelto por la función
*/
function parImpar() {
  let num = parseInt(prompt("Introduce un número"));
  if (num % 2 == 0) {
    return "El número es par";
  } else {
    return "El número es impar";
  }
}

console.log(parImpar());
