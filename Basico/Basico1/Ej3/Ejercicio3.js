// Definimos un array con todos los meses del año como cadenas de texto
var meses = ["enero", "febrero", "marzo", "junio", "julio", "agosto", "abril", "mayo", "junio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

// Definimos arrays separados para cada estación del año
var primavera = ["marzo", "abril", "mayo"];
var verano = ["junio", "julio", "agosto"];
var otono = ["septiembre", "octubre", "noviembre"];
var invierno = ["diciembre", "enero", "febrero"];

// Inicializamos la variable donde se almacenará el mes que introduzca el usuario
var mesAcomprobar = "";

// Inicializamos la variable mesEncontrado como falso
var mesEncontrado = false;

// Pedimos al usuario que introduzca un mes mediante el prompt
mesAcomprobar = prompt("Introduce un mes: ");

// Usamos un bucle `for in` para recorrer el array `meses`
for (let i in meses) {
    // Comprobamos si el mes introducido por el usuario coincide con alguno del array
    if (meses[i] === mesAcomprobar) {
        mesEncontrado = true;
//El método .includes() se utiliza para determinar si 
//un array o una cadena de texto contiene un valor específico.
        if (primavera.includes(mesAcomprobar)) {
            alert("Estamos en Primavera");

        } else if (verano.includes(mesAcomprobar)) {
            alert("Estamos en Verano");

        } else if (otono.includes(mesAcomprobar)) {
            alert("Estamos en Otoño");

        } else if (invierno.includes(mesAcomprobar)) {
            alert("Estamos en Invierno");
        }
    }
}

// Mostramos el mensaje de error si mesEcontrado es falso
if (!mesEncontrado) {
    alert("No es un mes válido");
}