/*
Crear un programa que permita al usuario elegir un candidato por el cual votar. Las 
posibilidades son: candidato A por el partido rojo, candidato B por el partido verde, candidato 
C por el partido azul. Según el candidato elegido (A, B ó C) se le debe imprimir el mensaje 
“Usted ha votado por el partido [color que corresponda al candidato elegido]”. Si el usuario 
ingresa una opción que no corresponde a ninguno de los candidatos disponibles, indicar 
“Opción errónea”.Contabiliza 10 votos y decir el ganador de las elecciones i los votos erróneos
que han habido.
*/
let votos = 0;
let votosErroneos = 0;
let votosA = 0;
let votosB = 0;
let votosC = 0;

// Ciclo para contabilizar 10 votos
while (votos < 10) {
  let candidato = prompt(
    "Ingrese el candidato por el que desea votar: A, B o C"
  );
  switch (candidato.toUpperCase()) {
    case "A":
      votosA++;
      alert("Usted ha votado por el partido rojo.");
      break;
    case "B":
      votosB++;
      alert("Usted ha votado por el partido verde.");
      break;
    case "C":
      votosC++;
      alert("Usted ha votado por el partido azul.");
      break;
    default:
      alert("Opción errónea");
      votosErroneos++;
      break;
  }
  votos++;
}

// Determinar el ganador
if (votosA > votosB && votosA > votosC) {
  alert(
    "El ganador de las elecciones es el candidato A con " + votosA + " votos."
  );
} else if (votosB > votosA && votosB > votosC) {
  alert(
    "El ganador de las elecciones es el candidato B con " + votosB + " votos."
  );
} else if (votosC > votosA && votosC > votosB) {
  alert(
    "El ganador de las elecciones es el candidato C con " + votosC + " votos."
  );
} else if (votosA === votosB && votosA > votosC) {
  alert(
    "Hay un empate entre el candidato A y el candidato B con " +
      votosA +
      " votos cada uno."
  );
} else if (votosA === votosC && votosA > votosB) {
  alert(
    "Hay un empate entre el candidato A y el candidato C con " +
      votosA +
      " votos cada uno."
  );
} else if (votosB === votosC && votosB > votosA) {
  alert(
    "Hay un empate entre el candidato B y el candidato C con " +
      votosB +
      " votos cada uno."
  );
} else {
  alert(
    "Hay un empate entre los tres candidatos con " + votosA + " votos cada uno."
  );
}

// Mostrar la cantidad de votos erróneos
alert("Se han contabilizado " + votosErroneos + " votos erróneos.");
