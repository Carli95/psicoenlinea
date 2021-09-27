/*Como aplicar el carrito de productos 

1- Que productos hay? Orientacion vocacional dos tipos proceso largo y proceso corto 
2-El usuario elige los productos , se buscan con el metodo find 
3- Imprime el producto con el precio a abonar por console

*/


function carritoOrientacion() {
    const consultadeProducto = confirm("Hola! ¿Deseas comprar el proceso de orientación vocacional?")
    if (consultadeProducto) {
       const tipoOrientacion = confirm("¿Te interesa el proceso Largo?")
       if(tipoOrientacion) {
           
       }
       
    }
    else {
    
    }
}

function buscarOrientacion(nombre) {
    orientacionElegida = productosOrientacion.find(orientacion => orientacion.nombre == nombre)
    if (!orientacionElegida) {
        alert("No existe ese proceso")
    }
    if (orientacionElegida = Largo)
        return console.log("Seleccionaste el proceso" + productosOrientacion.nombre + " el precio abonar es de" + productosOrientacion.precio)
}




const productosOrientacion = [{
        nombre: "Proceso Largo",
        precio: 500
    },
    {
        nombre: "Proceso Corto",
        precio: 300
    }
]