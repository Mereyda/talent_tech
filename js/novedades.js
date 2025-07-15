

//1. Creamos el array de novedades y dentro declaramos los objetos

let novedades = [
  {
    "id" : 1,
    "image" : "../media/image/pexels-peng-liu-45946-169677.jpg",
    "name" : "Ciudad Nocturna",
    "price" : 10.000,
    "description" : "Excelente vista nocturna"
  },
  {
    "id" : 2,
    "image" : "../media/image/pexels-peng-liu-45946-169677.jpg",
    "name" : "Ciudad gotica",
    "price" : 20.000,
    "description" : "Excelente vista nocturna"
  },
  {
    "id" : 3,
    "image" : "../media/image/pexels-peng-liu-45946-169677.jpg",
    "name" : "Ciudad nocturna",
    "price" : 300.000,
    "description" : "Excelente vista nocturna"
  },
  {
    "id" : 4,
    "image" : "../media/image/pexels-peng-liu-45946-169677.jpg",
    "name" : "Ciudad Nocturna",
    "price" : 500.000,
    "description" : "Excelente vista nocturna"
  }
];


//2. Mostramos lista e novedades, manipulando el DOM

let novedadesContainer = document.getElementById('novedades');
let inicio = document.getElementById('inicio');

//creo un contenedor individual para cada producto
let contenedorNovedades = document.createElement('div');

contenedorNovedades.classList.add('contenedor_producto');


document.addEventListener("DOMContentLoaded", (event) => {
  
  novedades.forEach(novedad => {
    contenedorNovedades.innerHTML += `
      <div class="card">
      <form id="my_form${novedad.id}">
        <div>
          <div id="imagen" name="imagen">
            <img class="imagen" src="${novedad.image}"></img>
          </div>
          <div id="nombre" name="nombre">${novedad.name}</div>
          <br>
          <div id="precio" name="precio">${novedad.price}$</div>
          <br>
          <div id="botonera${novedad.id}">
            <button onclick="comprar(${novedad.id})" class="button" value="Comprar">Comprar</button>
          </div>
          <div>
            <div id="description${novedad.id}" class="description">
              ${novedad.description}
            </div>
          </div>
        </div>
      </div>
    `;
    
    novedadesContainer.append(contenedorNovedades);


  });
});
document.addEventListener("DOMContentLoaded", () => {

  let volverInicio = document.getElementById('volver-inicio');
  volverInicio.addEventListener('click', () => {
    window.location.href = '../index.html';
  });
});


