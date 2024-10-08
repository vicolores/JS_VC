/*
EJERCICIO 3
Escribir un programa que muestre el eco (con document.write) de todo lo que el usuario
introduzca hasta que el usuario escriba “salir” que terminará y se mostrará todos los
mensajes escritos.
*/
let datosUsuario = [];

while (true) {
    let input = prompt("Introduce algo:");

    if (input.toLowerCase() === "salir") {
        break;
    }

    datosUsuario.push(input);

}

document.write("Todos los mensajes escritos: <br>" + datosUsuario.join("<br>"));<br>"));