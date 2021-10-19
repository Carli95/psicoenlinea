document.getElementById("miFormulario").addEventListener('submit', function (e) {
    {

        e.preventDefault();
        const nombre = $("#suscripcion_nombre");
        const email = $("#suscripcion_email");

        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic ZDU3NDg0YTgxNzY5NDBlNmI1YTU5ZGQ1ZGU2OTNjY2Y=");
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "eventName": "suscripcion_form",
            "email": email,
            "attributes": {
                "nombre": nombre
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
                $("#suscripcion_modal_nombre").innerHTML = nombre.value;
                $('#suscripcion_modal').modal('show')
        
                nombre.value = "";
                email.value = "";
            })
            .catch(error => console.log('error', error));

    }
});