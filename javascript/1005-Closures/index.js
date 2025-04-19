/*
{
  "id": 1005,
  "title": "Closures",
  "description": "Funciones que capturan el estado de su entorno de creación, permitiendo acceso a variables externas incluso después de finalizar su contexto original."
}
*/

/*
  Concepto 05: Closures
  Descripción:
  Funciones que capturan el estado de su entorno de creación, permitiendo acceso a variables externas
  incluso después de finalizar su contexto original.
*/

// Ejemplo básico de closure

function crearContador() {
  let contador = 0;

  // Esta función tiene acceso a "contador" aunque esté fuera de su bloque original
  return function () {
    contador++;
    return contador;
  };
}

const contador1 = crearContador();

console.log(contador1()); // 1
console.log(contador1()); // 2
console.log(contador1()); // 3

// Se crea una nueva instancia con su propio entorno
const contador2 = crearContador();

console.log(contador2()); // 1
console.log(contador2()); // 2

// Ejemplo práctico: función que configura un saludo personalizado

function crearSaludo(saludoInicial) {
  return function (nombre) {
    return `${saludoInicial}, ${nombre}`;
  };
}

const saludarHola = crearSaludo("Hola");
const saludarAdios = crearSaludo("Adiós");

console.log(saludarHola("María"));   // Hola, María
console.log(saludarAdios("Pedro"));  // Adiós, Pedro

// Otro ejemplo: acceso a una variable "privada"

function usuario(nombre) {
  let mensajes = 0;

  return {
    getNombre: function () {
      return nombre;
    },
    enviarMensaje: function () {
      mensajes++;
      return `Mensajes enviados: ${mensajes}`;
    },
    resetear: function () {
      mensajes = 0;
    }
  };
}

const user1 = usuario("Laura");
console.log(user1.getNombre());         // Laura
console.log(user1.enviarMensaje());     // Mensajes enviados: 1
console.log(user1.enviarMensaje());     // Mensajes enviados: 2
user1.resetear();
console.log(user1.enviarMensaje());     // Mensajes enviados: 1
