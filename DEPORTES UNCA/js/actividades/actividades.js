function Actividad(nombre, lugar, dia, horario, cupo, estado) {

    this.nombre = nombre;
    this.lugar = lugar;
    this.dia = dia;
    this.horario = horario;
    this.cupo = cupo;
    this.estado = estado;

}


class SistemaDeportes {

    constructor() {
        this.actividades = [];
    }

    agregarActividad(actividad) {
        this.actividades.push(actividad);
    }

    listarActividades() {
        return this.actividades;
    }

}

const sistema = new SistemaDeportes();

const futbol = new Actividad(
    "Fútbol",
    "Cancha techada",
    "Martes y jueves",
    "18:00 - 19:30",
    20,
    "disponible"
);

const basquet = new Actividad(
    "Básquet",
    "Gimnasio universitario",
    "Lunes y miércoles",
    "17:00 - 18:30",
    15,
    "disponible"
);

const voley = new Actividad(
    "Vóley",
    "Polideportivo",
    "Miércoles y viernes",
    "19:00 - 20:30",
    18,
    "disponible"
);

const atletismo = new Actividad(
    "Atletismo",
    "Pista de atletismo",
    "Martes y jueves",
    "16:00 - 17:30",
    25,
    "disponible"
);

sistema.agregarActividad(futbol);
sistema.agregarActividad(basquet);
sistema.agregarActividad(voley);
sistema.agregarActividad(atletismo);


const tabla = document.getElementById("tablaActividades");

const cuerpoTabla = tabla.querySelector("tbody");

const actividades = sistema.listarActividades();

actividades.forEach(function(actividad) {

    const fila = document.createElement("tr");

    const datos = [
        actividad.nombre,
        actividad.lugar,
        actividad.dia,
        actividad.horario,
        actividad.cupo,
        actividad.estado
    ];

    datos.forEach(function(dato) {

        const celda = document.createElement("td");

        celda.textContent = dato;

        fila.appendChild(celda);
    });

    cuerpoTabla.appendChild(fila);

});
