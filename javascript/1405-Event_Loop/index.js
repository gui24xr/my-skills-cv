/*
{
  "id": 1405,
  "title": "Event Loop",
  "description": "Mecanismo que permite a JavaScript manejar operaciones asíncronas y eventos de manera no bloqueante."
}
*/

/*
  Concepto: Event Loop
  Descripción: El Event Loop es el mecanismo que permite a JavaScript ser un lenguaje
  de programación asíncrono y no bloqueante. Es responsable de manejar la cola de eventos,
  las promesas y las operaciones asíncronas.
*/

// ------------------ EJEMPLOS DEL EVENT LOOP ------------------

// 1. Ejemplo básico de ejecución síncrona vs asíncrona
console.log("Inicio");

// Operación síncrona
for (let i = 0; i < 3; i++) {
  console.log(`Iteración síncrona ${i}`);
}

// Operación asíncrona
setTimeout(() => {
  console.log("Timeout completado");
}, 0);

console.log("Fin");

// 2. Microtasks y Macrotasks
console.log("Inicio del ejemplo de microtasks y macrotasks");

// Macrotask
setTimeout(() => {
  console.log("Macrotask: setTimeout");
}, 0);

// Microtask
Promise.resolve().then(() => {
  console.log("Microtask: Promise");
});

console.log("Fin del ejemplo");

// 3. Prioridad de ejecución
console.log("Inicio del ejemplo de prioridad");

// Macrotasks
setTimeout(() => console.log("Macrotask 1"), 0);
setTimeout(() => console.log("Macrotask 2"), 0);

// Microtasks
Promise.resolve().then(() => console.log("Microtask 1"));
Promise.resolve().then(() => console.log("Microtask 2"));

// Operación síncrona
console.log("Operación síncrona");

// 4. Ejemplo de bloqueo del Event Loop
function operacionBloqueante(ms) {
  const inicio = Date.now();
  while (Date.now() - inicio < ms) {
    // Bloqueando el Event Loop
  }
}

console.log("Inicio del ejemplo de bloqueo");

setTimeout(() => {
  console.log("Este timeout debería ejecutarse después de 1 segundo");
}, 1000);

// Esta operación bloqueará el Event Loop por 2 segundos
operacionBloqueante(2000);

console.log("Fin del ejemplo de bloqueo");

// 5. Ejemplo de manejo de eventos
class EventEmitter {
  constructor() {
    this.listeners = {};
  }

  on(evento, callback) {
    if (!this.listeners[evento]) {
      this.listeners[evento] = [];
    }
    this.listeners[evento].push(callback);
  }

  emit(evento, datos) {
    if (this.listeners[evento]) {
      // Los callbacks se ejecutan de manera asíncrona
      setTimeout(() => {
        this.listeners[evento].forEach(callback => callback(datos));
      }, 0);
    }
  }
}

const emisor = new EventEmitter();

emisor.on("datos", (datos) => {
  console.log("Evento recibido:", datos);
});

console.log("Emitiendo evento...");
emisor.emit("datos", { mensaje: "Hola Event Loop" });

// 6. Ejemplo de promesas y el Event Loop
console.log("Inicio del ejemplo de promesas");

new Promise((resolve) => {
  console.log("Promise ejecutándose");
  resolve("Promise resuelta");
}).then(resultado => {
  console.log(resultado);
});

setTimeout(() => {
  console.log("Timeout después de Promise");
}, 0);

console.log("Fin del ejemplo de promesas");

// 7. Ejemplo de async/await y el Event Loop
async function ejemploAsync() {
  console.log("Inicio de función async");
  
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log("Después de await");
  
  return "Función async completada";
}

console.log("Antes de llamar a async");
ejemploAsync().then(console.log);
console.log("Después de llamar a async");

// 8. Ejemplo de interacción entre diferentes tipos de tareas
console.log("Inicio del ejemplo de interacción");

// Macrotask
setTimeout(() => {
  console.log("Macrotask: Inicio");
  
  // Microtask dentro de macrotask
  Promise.resolve().then(() => {
    console.log("Microtask dentro de macrotask");
  });
  
  console.log("Macrotask: Fin");
}, 0);

// Microtask
Promise.resolve().then(() => {
  console.log("Microtask: Inicio");
  
  // Macrotask dentro de microtask
  setTimeout(() => {
    console.log("Macrotask dentro de microtask");
  }, 0);
  
  console.log("Microtask: Fin");
});

console.log("Fin del ejemplo de interacción");
