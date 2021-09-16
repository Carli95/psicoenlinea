class turnoConfirmado {

    constructor(nombre, apellido, email, horario) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.horario = horario;
        this.reservado = false;
    }

    datosTurno() {

        if (!this.nombre) {
            alert("El turno no puede ser reservado sin los datos");
            return false;
        }

        if (!this.apellido) {
            alert("El turno no puede ser reservado sin los datos");
            return false;
        }

        if (!this.email) {
            alert("El turno no puede ser reservado sin los datos");
            return false;
        }

        if (!this.horario) {
            alert("El turno no puede ser reservado sin el horario");
            return false;
        }

        this.reservado = true;
        return "Gracias" + " " + this.nombre + " "+  this.apellido + " " + "su turno fue reservado";
    }

}

let nombre = prompt("Para agendar tu turno dejanos tu nombre");
let apellido = prompt("Tu apellido tambien");
let email = prompt("Tu email para notificarte novedades sobre tu turno");
let horario = prompt("Tu horario de preferencia, indicando si es por la mañana o tarde");

const turno1 = new turnoConfirmado(nombre, apellido, email, horario);


console.log(turno1.datosTurno()); 