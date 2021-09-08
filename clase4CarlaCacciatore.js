function datosPersonales(nombre, apellido, email) {
    if (!nombre) {
        alert("Te pedimos que completes tu nombre");
    }

    else if (!apellido) {
        alert("Te pedimos que completes tu apellido");
    }
    else if (!email) {
        alert("Te pedimos nos brindes un email");
    }
    else {
        console.log("Gracias por completar");
    }

}

function disponibilidadTurno(horario) {
    if (horario == "tarde") {
        alert("Gracias por todo te estaremos contactando en las proximas horas");
    }
    else {
        alert("No contamos con esa disponbilidad te pedimos disculpas");
    }
}


let nombre = prompt("¿Quéres solicitar un turno? Coloca tu nombre");
let apellido = prompt("Ahora tu apellido");
let email = prompt("Por ultimo tu email");

datosPersonales(nombre, apellido, email);


let horario = prompt("¿Qué turno preferis por la mañana o tarde?");

disponibilidadTurno(horario);