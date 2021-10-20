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

    const myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic ZDU3NDg0YTgxNzY5NDBlNmI1YTU5ZGQ1ZGU2OTNjY2Y=");
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "eventName": "suscripcion_form",
            "email": '"'+email+'"',
            "attributes": {
                "nombre": '"'+nombre+'"' ,
                "telefono" : '"'+telefono+'"' ,
                "modalidad" : '"'+modalidad+'"' ,
                "fecha" : '"'+fecha+'"',
                "horario" : '"'+horario+'"'
            }
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://track.embluemail.com/contacts/event", requestOptions)
            .then(result => {
                $("#nombre").innerHTML = nombre.value;
                $("#form_contacto").modal('show')
                document.getElementById("formTurno").reset()
            })
            .catch(error => console.log('error', error));

    }
);





