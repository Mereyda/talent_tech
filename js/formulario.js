
// Utilizando el DOM
let btn = document.getElementById("enviar");

btn.addEventListener("click", mostrarMensaje);


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
  "Hola: ".concat(txtNombre + " , " + txtApellido);
  if(edad > 17) {
    document.getElementById('mensaje').innerText += " Eres mayor de edad " + mensajeUsuario;
  } else {
    alert(
    document.getElementById('mensaje').innerText += " Eres menor de edad " + mensajeUsuario);
  }
}


