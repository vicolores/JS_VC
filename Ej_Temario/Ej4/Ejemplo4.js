var valores = [true, 5, false, "hola", "adios", 2];

var textoMayor = valores[3] > valores[4];
alert(textoMayor);

var verdadero = valores[0] || valores[2];
alert(verdadero);
var falso = valores[0] && valores[2];
alert(falso);

var suma = valores[1] + valores[5];
alert(suma);
var resta = valores[1] - valores[5];
alert(resta);
var multiplicacion = valores[1] * valores[5];
alert(multiplicacion);
var division = valores[1] / valores[5];
alert(division);
var modulo = valores[1] % valores[5];
alert(modulo);