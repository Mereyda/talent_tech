// let productosContainer = document.getElementById('ver-formulario');

// document.getElementById("miFormulario").addEventListener("submit", function(e) {
//   e.preventDefault();

//   const nombre = document.getElementById("nombre").value;
//   const email = document.getElementById("email").value;
//   const mensaje = document.getElementById("mensaje").value;

//   console.log("Formulario enviado:");
//   console.log("Nombre:", nombre);
//   console.log("Email:", email);
//   console.log("Mensaje:", mensaje);

//   // Aquí podrías enviar los datos con fetch() a un servidor
// });

//   document.getElementById("ver-formulario").addEventListener("click", function (e) {
//     e.preventDefault(); // evita que el enlace recargue la página

//     fetch("formulario.html")
//       .then(response => response.text())
//       .then(html => {
//         const parser = new DOMParser();
//         const doc = parser.parseFromString(html, "text/html");
        
//         // Obtenemos solo el <form> del archivo
//         const formulario = doc.querySelector("form");
        
//         // Insertamos el formulario en el contenedor
//         const contenedor = document.getElementById("formulario-container");
//         contenedor.innerHTML = ""; // Limpiamos si había algo
//         contenedor.appendChild(formulario);

//         // También podés insertar el <script> del formulario si es necesario:
//         const script = doc.querySelector("script");
//         if (script && script.src) {
//           const nuevoScript = document.createElement("script");
//           nuevoScript.src = script.src;
//           document.body.appendChild(nuevoScript);
//         }
//       })
//       .catch(error => {
//         console.error("Error al cargar el formulario:", error);
//       });
//   });

/*
En este archivo vamos a definir el comportamiento del
formulario , vamos a extraer los valores de los campos 
(texto y númerico)
Y por último vamos a mostrar un mensaje debajo del form
*/

//declaramos variables para almacenar los datos de cada campo


//declaramos una variable y la vinculamos al botón Enviar
let btn = document.getElementById("enviar");

//Aplicamos al botón el evento/método addEventListener()
btn.addEventListener("click", mostrarMensaje);

//Función
//En esta función creamos un mensaje y le agregamos los valores
//extraidos de los campos del formulario
//Y por último hacemos una validación de edad y mostramos un mensaje.
function mostrarMensaje(event) {
  event.preventDefault();
  let txtNombre = document.getElementById("nombre").value;
  let txtApellido = document.getElementById("apellido").value;
  let edad = document.getElementById("edad").value; 
  let mensajeUsuario = document.getElementById ("mensajeUsuario").value;
  console.log(txtNombre);
  console.log(txtApellido);
  console.log(edad);
  console.log(mensajeUsuario);
  
  document.getElementById('mensaje').innerText = 
  "Bienvenido/a ".concat(txtNombre + ", " + txtApellido);
  if(edad > 17) {
    document.getElementById('mensaje').innerText += " Es mayor, mensaje " + mensajeUsuario;
  } else {
    document.getElementById('mensaje').innerText += " Es menor, mensaje " + mensajeUsuario;
  }
}


