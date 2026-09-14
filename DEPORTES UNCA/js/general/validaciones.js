function validarFechaNacimiento(inputFecha) {

    const fecha = inputFecha.value;
    const hoy = new Date().toISOString().split("T")[0];

    if (fecha > hoy) {
        alert("La fecha de nacimiento no puede ser posterior a la fecha actual");
        return false;
    }

    return true;
}

function validarDNI(inputDni) {

    const dni = inputDni.value;

    if (!/^\d{8}$/.test(dni)) {
        alert("El DNI debe contener 8 dígitos");
        return false;
    }

    return true;
}



const formulario = document.getElementById("formInscripcion");

formulario.addEventListener("submit", function(event) {

    const fechas = document.querySelectorAll('input[name^="fecha"]');
    const dnis = document.querySelectorAll('input[name^="dni"]');

    for (let i = 0; i < fechas.length; i++) {

        if (!validarFechaNacimiento(fechas[i])) {
            event.preventDefault();
            return;
        }

        if (!validarDNI(dnis[i])) {
            event.preventDefault();
            return;
        }

    }

});

