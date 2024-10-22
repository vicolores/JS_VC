//Escribe un programa que pida una frase y escriba las vocales que aparecen

let frase = prompt("Introduce una frase");
let vocales = [];

for (let i = 0; i < frase.length; i++) {
  if ("aeiou".includes(frase[i].toLowerCase())) {
    vocales.push(frase[i]);
  }
}
document.write("Las vocales que aparecen son " + vocales.join(","));
