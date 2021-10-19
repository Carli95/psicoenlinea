const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody')
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaOrientacion = document.querySelector('#lista-orientacion');
let articulosCarrito = [];


listaOrientacion.addEventListener(`click`, (e) => {
    e.preventDefault();
    if (e.target.classList.contains('comprar')) {
        const orientacionSelecionada = e.target.parentElement.parentElement;
        leerDatosOrientacion(orientacionSelecionada);
    }
})

carrito.addEventListener(`click` , (e) => {
    e.preventDefault();
    if (e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id');
        articulosCarrito = articulosCarrito.filter( orientacion => orientacion.id !== cursoId);
        
        carritoHTML(); 
    }
}
)



function leerDatosOrientacion(orientacion) {
 
    const infoOrientacion = {
        titulo: orientacion.querySelector('h4').textContent,
        precio: orientacion.querySelector('h1').textContent,
        id: orientacion.querySelector('button').value,
        cantidad: 1
    }

    const existe = articulosCarrito.some(orientacion => orientacion.id === infoOrientacion.id);
    if (existe) {
        articulosCarrito = articulosCarrito.map(orientacion => {
            if (orientacion.id === orientacion.id) {
                orientacion.cantidad++;
            }
            return orientacion
        });

    } else {

        articulosCarrito.push(infoOrientacion)
    }

 
    carritoHTML();

}


function carritoHTML() {

    // Limpiar el HTML
    limpiarHTML();

    // Recorre el carrito y genera el HTML
    articulosCarrito.forEach(orientacion => {

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${orientacion.titulo}</td>
            <td>${orientacion.precio}</td>
            <td>${orientacion.cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${orientacion.id}"> X </a>
            </td>
        `;

        contenedorCarrito.appendChild(row);
    });


    sincronizarStorage();


}

function sincronizarStorage() {
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}


function limpiarHTML() {

    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}

function leerCarrito () {
    const data = localStorage.getItem("carrito")
    if (data)  {
        const articulosCarrito = JSON.parse(data)
        articulosCarrito.forEach(orientacion => {

            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${orientacion.titulo}</td>
                <td>${orientacion.precio}</td>
                <td>${orientacion.cantidad}</td>
                <td>
                    <a href="#" class="borrar-curso" data-id="${orientacion.id}"> X </a>
                </td>
            `;
    
            contenedorCarrito.appendChild(row);
        });

    }
}

leerCarrito()

const vaciarCarritoBtn = localStorage.clear();
