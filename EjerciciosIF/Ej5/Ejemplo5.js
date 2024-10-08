var dineroDisponible = prompt("De que dinero dispones: ");

if (dineroDisponible >= 0.6 && dineroDisponible < 1) {
    alert("Puedes compra un helado de fresa");
    let cambio = dineroDisponible - 0.6;
    alert("El cambio es: " + cambio);

}
if(dineroDisponible >= 1 && dineroDisponible < 1.6) {
    alert("Puedes compra un helado de chocolate");
    let cambio = dineroDisponible - 1;
    alert("El cambio es: " + cambio);

}if(dineroDisponible == 1.6) {
    alert("Puedes compra un helado de nata");
    let cambio = dineroDisponible - 1.6;
    alert("El cambio es: " + cambio);

}
if(dineroDisponible == 1.7) {
    alert("Puedes compra un helado de vainilla");
    let cambio = dineroDisponible - 1.7;
    alert("El cambio es: " + cambio);

}
if(dineroDisponible >= 1.8 && dineroDisponible < 2.9) {
    alert("Puedes compra un helado de mora");
    let cambio = dineroDisponible - 1.8;
    alert("El cambio es: " + cambio);

}
if(dineroDisponible >= 2.9) {
    alert("Puedes compra un helado de piña o pomelo");
    let cambio = dineroDisponible - 2.9;
    alert("El cambio es: " + cambio);

}