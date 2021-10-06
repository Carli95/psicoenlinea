document.getElementById("miFormulario").submit(function (e) {

    /* No enviar el formulario */
    e.preventDefault();

    /* Campos */
    const nombre = $("#suscripcion_nombre");
    const email = $("#suscripcion_email");

    /* Modal */
    $("#suscripcion_modal_nombre").innerHTML = nombre.value;
    $('#suscripcion_modal').modal('show')

    /* Limpiar campos */
    nombre.value = "";
    email.value = "";
});


