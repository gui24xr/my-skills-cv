/*
{
  "id": 1207,
  "title": "Monads",
  "description": "Patrón que permite encadenar operaciones, manejando contextos como la asincronía o el manejo de errores."
}
*/

// Monads: estructuras que permiten encadenar operaciones secuenciales,
// manteniendo el contexto (como nulos, errores, asincronía).
// Una mónada implementa `.map()` para transformar y `.flatMap()` (o `.chain()`)
// para encadenar operaciones que también retornan mónadas.

// Implementación de una mónada tipo Maybe
function Maybe(valor) {
  return {
    isNothing: valor === null || valor === undefined,

    map(fn) {
      if (this.isNothing) return Maybe(null);
      return Maybe(fn(valor));
    },

    flatMap(fn) {
      if (this.isNothing) return Maybe(null);
      return fn(valor); // fn debe retornar un Maybe
    },

    getOrElse(defaultValue) {
      return this.isNothing ? defaultValue : valor;
    },

    toString() {
      return this.isNothing ? "Maybe(null)" : `Maybe(${valor})`;
    }
  };
}

// Ejemplo 1: manejo seguro de valores nulos
const usuario = {
  nombre: "Lucía",
  direccion: {
    ciudad: "Córdoba"
  }
};

const ciudad = Maybe(usuario)
  .map(u => u.direccion)
  .map(d => d.ciudad)
  .getOrElse("Ciudad desconocida");

console.log(ciudad); // Córdoba

// Ejemplo 2: operación con posible fallo
function dividir(a, b) {
  return b === 0 ? Maybe(null) : Maybe(a / b);
}

const resultadoSeguro = Maybe(10)
  .flatMap(x => dividir(x, 2))   // Maybe(5)
  .flatMap(x => dividir(x, 0))   // Maybe(null)
  .flatMap(x => dividir(x, 2));  // No se ejecuta, ya es null

console.log(resultadoSeguro.toString()); // Maybe(null)

/* Casos de uso:
// - Encadenar operaciones que pueden fallar sin usar condicionales.
// - Evitar errores por null/undefined sin excepciones.
// - Modelar
*/
