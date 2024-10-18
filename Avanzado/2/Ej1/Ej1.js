window.onload = function () {
    // Mostrar el mensaje de bienvenida en un formato H1
    const h1 = document.createElement("h1");
    h1.textContent = "Bienvenido a mi página";
    document.body.appendChild(h1);

    // Mostrar la plataforma del navegador
    const platformInfo = document.createElement("p");
    platformInfo.textContent =
        "Plataforma del navegador: " + navigator.platform;
    document.body.appendChild(platformInfo);

    // Pedir confirmación para continuar
    const continuar = confirm("¿Quieres continuar?");
    if (continuar) {
        const continuarMensaje = document.createElement("p");
        continuarMensaje.textContent = "continuamos...";
        document.body.appendChild(continuarMensaje);
    }
};
