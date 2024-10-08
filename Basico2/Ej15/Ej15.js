// Escribir un programa que escriba en pantalla los divisores comunes de dos
// números dados

//Escribir un programa que escriba en pantalla los divisores de un número dado por el usuario.
let numero1 = parseInt(prompt("Ingrese un número: "));
let numero2 = parseInt(prompt("Ingrese otro número: "));
let divisores = [];

document.write("Los números introducidos son: " + numero1 + " y " + numero2 + " y sus divisores comunes son: " + "<br>");
if (numero1 > numero2) {
  for (let i = 1; i <= numero1; i++) {
    if (numero1 % i === 0 && numero2 % i === 0) {
      divisores.push(i);
      document.write(i + "<br>");
    }
  }
}else {
  for (let i = 1; i <= numero2; i++) {
    if (numero1 % i === 0 && numero2 % i === 0) {
      divisores.push(i);
      document.write(i + "<br>");
    }
  }
}
// Las `` permiten escribir código dentro de una cadena de texto, con ${}
// divisiores.join(", ") es una función que une los elementos del array en una cadena de texto separados por comas y document.write lo imprime como una cadena
document.write(`Los divisores de ${numero} son: ${divisores.join(", ")}`);