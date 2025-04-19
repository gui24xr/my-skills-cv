/*
{
  "id": 1401,
  "title": "Callbacks",
  "description": "Funciones que se pasan como argumentos a otras funciones para ser ejecutadas después de completar una operación."
}
*/

/*
  Concepto: Callbacks
  Descripción: Los callbacks son funciones que se pasan como argumentos a otras funciones
  y se ejecutan después de que se complete una operación. Son fundamentales para manejar
  operaciones asíncronas en JavaScript.
*/

// ------------------ EJEMPLOS DE CALLBACKS ------------------

// 1. Callback básico
function saludar(nombre, callback) {
  console.log(`Hola, ${nombre}`);
  callback();
}

saludar("Juan", () => {
  console.log("Callback ejecutado");
});

// 2. Callback con operación asíncrona simulada
function obtenerDatos(callback) {
  setTimeout(() => {
    const datos = { id: 1, nombre: "Ejemplo" };
    callback(datos);
  }, 1000);
}

obtenerDatos((datos) => {
  console.log("Datos recibidos:", datos);
});

// 3. Callback con manejo de errores
function dividir(a, b, exito, error) {
  if (b === 0) {
    error("No se puede dividir por cero");
  } else {
    exito(a / b);
  }
}

dividir(
  10,
  2,
  (resultado) => console.log("Resultado:", resultado),
  (error) => console.error("Error:", error)
);

// 4. Callback en operaciones de array
const numeros = [1, 2, 3, 4, 5];

// Usando forEach con callback
numeros.forEach((numero, indice) => {
  console.log(`Elemento ${indice}: ${numero}`);
});

// 5. Callback en eventos del DOM (simulado)
class EventEmitter {
  constructor() {
    this.eventos = {};
  }

  on(evento, callback) {
    if (!this.eventos[evento]) {
      this.eventos[evento] = [];
    }
    this.eventos[evento].push(callback);
  }

  emit(evento, datos) {
    if (this.eventos[evento]) {
      this.eventos[evento].forEach(callback => callback(datos));
    }
  }
}

// Ejemplo de uso
const emisor = new EventEmitter();

emisor.on("click", (datos) => {
  console.log("Click detectado:", datos);
});

// Simulando un evento
emisor.emit("click", { x: 100, y: 200 });

// 6. Callback hell y su solución
// Ejemplo de callback hell
function operacionCompleja(callback) {
  setTimeout(() => {
    console.log("Paso 1 completado");
    setTimeout(() => {
      console.log("Paso 2 completado");
      setTimeout(() => {
        console.log("Paso 3 completado");
        callback("Operación completada");
      }, 1000);
    }, 1000);
  }, 1000);
}

// Solución usando funciones nombradas
function paso1(callback) {
  setTimeout(() => {
    console.log("Paso 1 completado");
    callback();
  }, 1000);
}

function paso2(callback) {
  setTimeout(() => {
    console.log("Paso 2 completado");
    callback();
  }, 1000);
}

function paso3(callback) {
  setTimeout(() => {
    console.log("Paso 3 completado");
    callback("Operación completada");
  }, 1000);
}

function operacionComplejaMejorada(callback) {
  paso1(() => {
    paso2(() => {
      paso3(callback);
    });
  });
}

// Uso de la versión mejorada
operacionComplejaMejorada((resultado) => {
  console.log(resultado);
});
