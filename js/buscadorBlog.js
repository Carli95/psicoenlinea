$(document).ready(function(){
    $("#show").click(function(){
      $(".texto-blog").show();
    });
    $("#hide").click(function(){
        $("p").hide();
      });
  });




/*const Articulos = [{nombre:"¿Cómo ayudar a alguien con depresion?",},{nombre:"¿Que es la ansiedad?"},{nombre:"ESI Qué es?"},{nombre:"Conoce más sobre el estres laboral"},{nombre:"¿Que es la autoexigencia?"},{nombre:"Tips para el insomnio"}];

document.getElementById("buscador").addEventListener("submit", (e) => {

    e.preventDefault();
    const termino = $("#termino");
    const arrayArticulos = Articulos.filter(articulo => articulo.nombre.includes(termino))
    console.log(arrayArticulos);
    });

*/