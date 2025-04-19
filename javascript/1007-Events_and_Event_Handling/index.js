/*
  Concepto 07: Events and Event Handling
  Descripción:
  Manejo de eventos en JavaScript, incluyendo el registro de eventos y la propagación.
*/

// ------------------ 1. Registro de eventos ------------------

const boton = document.getElementById("miBoton");

// Usando addEventListener para registrar un evento de clic
boton.addEventListener("click", function() {
  alert("¡Botón clickeado!");
});

// ------------------ 2. Eventos con funciones anónimas ------------------

const boton2 = document.getElementById("miBoton2");
boton2.addEventListener("click", function() {
  console.log("Botón 2 clickeado!");
});

// ------------------ 3. Eventos con funciones nombradas ------------------

function mostrarMensaje() {
  console.log("¡Hola desde una función nombrada!");
}

const boton3 = document.getElementById("miBoton3");
boton3.addEventListener("click", mostrarMensaje);

// ------------------ 4. Pasando parámetros en eventos ------------------

const boton4 = document.getElementById("miBoton4");

boton4.addEventListener("click", function() {
  mostrarMensajeConParametro("Hola, evento!");
});

function mostrarMensajeConParametro(mensaje) {
  console.log(mensaje);
}

// ------------------ 5. Propagación de eventos: Captura y burbujeo ------------------

document.getElementById("contenedor").addEventListener("click", function() {
  console.log("Evento capturado en el contenedor");
}, true);  // `true` activa la fase de captura

const boton5 = document.getElementById("miBoton5");
boton5.addEventListener("click", function() {
  console.log("Botón clickeado - Burbuja");
});

document.getElementById("contenedor").addEventListener("click", function() {
  console.log("Evento en el contenedor - Burbuja");
});

// ------------------ 6. Detener la propagación de eventos ------------------

const boton6 = document.getElementById("miBoton6");

boton6.addEventListener("click", function(event) {
  console.log("Clic en el botón - Propagación detenida");
  event.stopPropagation(); // Detiene la propagación del evento
});

// ------------------ 7. Eliminar un evento ------------------

function eventoEliminar() {
  console.log("Evento eliminado.");
}

const boton7 = document.getElementById("miBoton7");
boton7.addEventListener("click", eventoEliminar);

// Para eliminarlo:
boton7.removeEventListener("click", eventoEliminar);

// ------------------ 8. Uso de `this` en el contexto de eventos ------------------

const boton8 = document.getElementById("miBoton8");

boton8.addEventListener("click", function() {
  console.log(this);  // 'this' hace referencia al elemento que disparó el evento
  alert("¡Has hecho clic en el botón!");
});
