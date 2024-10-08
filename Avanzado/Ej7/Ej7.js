/*
Reescribe este if en un switch.
navegador= prompt ("Introduce tu navegador favorito: Chrome, Firefox, 
Safari, Opera,Edge");
if(navegador == 'Edge') {
  alert("¡Tienes Edge!");
} else if (navegador == 'Chrome' || navegador == 'Firefox' || navegador == 
'Safari' || navegador == 'Opera') {
  alert( 'Está bien, soportamos estos navegadores también' );
} else {
  alert( '¡Esperamos que la página se vea bien!' );
}
*/

let navegador = prompt(
  "Introduce tu navegador favorito: Chrome, Firefox, Safari, Opera, Edge"
);

switch (navegador) {
  case "Edge":
    alert("¡Tienes Edge!");
    break;
  case "Chrome":
  case "Firefox":
  case "Safari":
  case "Opera":
    alert("Está bien, soportamos estos navegadores también");
    break;
  default:
    alert("¡Esperamos que la página se vea bien!");
}
