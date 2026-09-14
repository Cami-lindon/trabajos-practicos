const cantidadParticipantes = document.getElementById("cantidadParticipantes");
const botonGenerar = document.getElementById("generarParticipantes");
const contenedor = document.getElementById("contenedorParticipantes");


botonGenerar.addEventListener("click", function() {

    const cantidad = cantidadParticipantes.value;

    contenedor.innerHTML = "";

    for (let i = 1; i <= cantidad; i++) {

        const participante = document.createElement("fieldset");
        participante.classList.add("participante-dinamico");

        const titulo = document.createElement("legend");
        titulo.textContent = "Participante " + i;

        participante.appendChild(titulo);


        // Apellido y nombre
        const labelNombre = document.createElement("label");
        labelNombre.textContent = "Apellido y Nombre:";

        const inputNombre = document.createElement("input");
        inputNombre.type = "text";
        inputNombre.name = "nombre" + i;
        inputNombre.required = true;

        participante.appendChild(labelNombre);
        participante.appendChild(inputNombre);


        // DNI
        const labelDni = document.createElement("label");
        labelDni.textContent = "DNI:";

        const inputDni = document.createElement("input");
        inputDni.type = "text";
        inputDni.name = "dni" + i;
        inputDni.required = true;

        participante.appendChild(labelDni);
        participante.appendChild(inputDni);


        // Fecha de nacimiento
        const labelFecha = document.createElement("label");
        labelFecha.textContent = "Fecha de nacimiento:";

        const inputFecha = document.createElement("input");
        inputFecha.type = "date";
        inputFecha.name = "fecha" + i;
        inputFecha.required = true;

        participante.appendChild(labelFecha);
        participante.appendChild(inputFecha);


        // Sexo
        const labelSexo = document.createElement("label");
        labelSexo.textContent = "Sexo:";

        const selectSexo = document.createElement("select");
        selectSexo.name = "sexo" + i;
        selectSexo.required = true;

        const opcionFemenino = document.createElement("option");
        opcionFemenino.value = "femenino";
        opcionFemenino.textContent = "Femenino";

        const opcionMasculino = document.createElement("option");
        opcionMasculino.value = "masculino";
        opcionMasculino.textContent = "Masculino";

        const opcionNoBinario = document.createElement("option");
        opcionNoBinario.value = "no-binario";
        opcionNoBinario.textContent = "No binario";

        selectSexo.appendChild(opcionFemenino);
        selectSexo.appendChild(opcionMasculino);
        selectSexo.appendChild(opcionNoBinario);

        participante.appendChild(labelSexo);
        participante.appendChild(selectSexo);


        // Nivel
        const labelNivel = document.createElement("label");
        labelNivel.textContent = "Nivel:";

        const selectNivel = document.createElement("select");
        selectNivel.name = "nivel" + i;
        selectNivel.required = true;

        const opcionInicial = document.createElement("option");
        opcionInicial.value = "inicial";
        opcionInicial.textContent = "Inicial";

        const opcionIntermedio = document.createElement("option");
        opcionIntermedio.value = "intermedio";
        opcionIntermedio.textContent = "Intermedio";

        const opcionAvanzado = document.createElement("option");
        opcionAvanzado.value = "avanzado";
        opcionAvanzado.textContent = "Avanzado";

        selectNivel.appendChild(opcionInicial);
        selectNivel.appendChild(opcionIntermedio);
        selectNivel.appendChild(opcionAvanzado);

        participante.appendChild(labelNivel);
        participante.appendChild(selectNivel);


        // Agregar participante al HTML
        contenedor.appendChild(participante);
    }

});