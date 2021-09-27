class Carrito {
    servicios = [{
        id: 4567,
        nombre: "Orientacion Proceso Largo",
        precio: 500
    }, {
        id: 3456,
        nombre: "Orientacion Proceso Corto",
        precio: 300
    }, {
        id: 4050,
        nombre: "Orientacion virtual",
        precio: 250
    }]
    misServicios = []
    agregarServicios(id) {
        this.misServicios.push(id)
    }
    calcularTotal() {
        return  500
    }
    listadoServicios() {
        const listado = this.servicios.map(servicio => `${servicio.id} - ${servicio.nombre}: ${servicio.precio}`)
        return listado.join(", ")
    }
    validarCodigoServicio(id) {
        const filtrados = this.servicios.filter(servicio=> servicio.id== id)
            return filtrados.length == 1
    }

}


    const miCarrito = new Carrito()
    /*Paso 1 : llenar carrito */
    alert("Bienvenido al carro de compras,ingrese el codigo de producto")

    let confirmar = false
    do {
        let idUsuario = prompt(miCarrito.listadoServicios())
        if (miCarrito.validarCodigoServicio(idUsuario)) {
            miCarrito.agregarServicios(idUsuario)
            confirmar = confirm("¿Desea confirmar la compra?")
        } else {
            alert("Servicio no encontrado")
        }

    } while (!confirmar)


    /*Paso 2 : mostrar presupuesto */

    alert("Tu total es de" + miCarrito.calcularTotal())