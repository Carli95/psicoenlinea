/*Como aplicar el carrito de productos 

1- Que productos hay? Orientacion vocacional dos tipos proceso largo y proceso corto 
2-El usuario elige los productos , se buscan con el metodo find 
3- Imprime el producto con el precio a abonar por console

*/


function carritoOrientacion() {
    consultadeProducto = promt("Hola! ¿Deseas comprar el proceso de orientación vocacional? ")
    if (consultadeProducto == "NO") {
        return "Esta bien,no hay problema"
    }
    if (consultadeProducto == "SI") {

        tipoOrientacion = promt("Te pedimos que nos indiques si deseas comprar el proceso largo o corto")

        function buscarOrientacion(nombre) {
            orientacionElegida = productosOrientacion.find(orientacion => orientacion.nombre == nombre)
            if (!orientacionElegida) {
                alert("No existe ese proceso")
            }
            if (orientacionElegida = Largo)
                return console.log("Seleccionaste el proceso" + productosOrientacion.nombre + " el precio abonar es de" + productosOrientacion.precio)
        }
    }
}

const productosOrientacion = [{
        nombre: "Proceso Largo",
        precio: 500,
    },
    {
        nombre: "Proceso Corto",
        precio: 300
    }
]