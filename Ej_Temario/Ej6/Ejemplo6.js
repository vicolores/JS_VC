var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N',
    'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

let dniUsuario = Number(prompt("Introduce el número del dni"));
let letraUsuario = prompt("Introduce la letra del dni");

if (dniUsuario < 0 || dniUsuario > 99999999) {
    alert("Número proporcionado no es válido");
} else {
    var letra = dniUsuario % 23;
    //alert(letras[letra]);
}

if (letraUsuario == letras[letra]) {
    alert("El número y la letra de DNI son correctos.")
    
} else {
    alert("La letra indicada no es correcta")
    
}




