document.getElementById("formTurno").addEventListener("submit", (e) => {

    /* No enviar el formulario */
    e.preventDefault();

    /* Campos */
    const nombre = $("#nombre");
    const email = $("#email");
    const telefono = $("#telefono") ;
    const modalidad = $("#modalidad") ;
    const fecha = $("#cita");
    const horario = $("#horario");

    /* Modal */
    $("#nombre").innerHTML = nombre.value;
    $("#form_contacto").modal('show')

});

localStorage.setItem(nombre,email,telefono,modalidad,fecha,horario)
console.log((localStorage))