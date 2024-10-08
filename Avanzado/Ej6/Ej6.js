/*
Crea un programa que pida una palabra al usuario y utilizando el while y el método 
charAt, muestre cada una de las letras que componen la entrada.
Ejemplo si se introduce “pedro” debe mostrar:
Letra 1: p 
Letra 2: e 
Letra 3: d
Letra 4: r
Letra 5: o

*/

let palabra = prompt("Ingrese una palabra: ");
let i = 0;
while (i < palabra.length) {
  document.write("Letra " + (i + 1) + ": " + palabra.charAt(i) + "<br>");
  i++;
}
