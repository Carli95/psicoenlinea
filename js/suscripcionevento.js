document.getElementById("miFormulario").addEventListener("submit", (e) => {

    /* No enviar el formulario */
    e.preventDefault();

    /* Campos */
    const nombre = document.getElementById("suscripcion_nombre");
    const email = document.getElementById("suscripcion_email");

    /* Modal */
    document.getElementById("suscripcion_modal_nombre").innerHTML = nombre.value;
    $('#suscripcion_modal').modal('show')

    /* Limpiar campos */
    nombre.value = "";
    email.value = "";
});


/*

suscripcion.onclick = () =>{
    modal.style.display = block ;
}


    modal.classList.remove('noshow');
style.visibility = "visible"
miFormulario.addEventListener("submit", validarFormulario);

let modal = document.getElementById("miModal")

function validarFormulario(e){
    e.preventDefault();
    modal.style.display = "visibility";
   }
  
   
   let boton         = document.getElementById("btnMain");
   boton.onclick     = () => {console.log("Click")};

/*
const open = document.getElementById("open")
let contenedor = document.createElement("div");
const close = document.getElementById("close");

contenedor.innerHTML = `<h3> Gracias por suscribirse</h3>
                        <p>  Proximamente estara recibiendo informacion</p>
                        <b> gracias</b>`;

contenedor.style.background = "#F6E4E0";

document.body.appendChild(contenedor);

open.addEventListener("click",validarFormulario);

function validarFormulario(e){
    e.preventDefault();

}


/*close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});

    modal_container.classList.add('show');

*/




