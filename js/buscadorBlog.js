const Articulos = [{nombre:"¿Cómo ayudar a alguien con depresion?",},{nombre:"¿Que es la ansiedad?"},{nombre:"ESI Qué es?"},{nombre:"Conoce más sobre el estres laboral"},{nombre:"¿Que es la autoexigencia?"},{nombre:"Tips para el insomnio"}];

let filtro = prompt ("¿Qué articulos estas buscando?")
const arrayArticulos = Articulos.filter(articulo => articulo.nombre.includes(filtro))
console.log(arrayArticulos)

