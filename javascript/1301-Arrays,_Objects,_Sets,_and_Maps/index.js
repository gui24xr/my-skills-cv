/*
{
  "id": 1301,
  "title": "Arrays, Objects, Sets, and Maps",
  "description": "Uso de estructuras de datos como arrays, objetos, sets y maps para almacenar y manipular información."
}
*/

/*
Arrays, Objects, Sets y Maps: estructuras fundamentales en JavaScript
para almacenar y manipular colecciones de datos.

- Arrays: listas ordenadas con acceso por índice.
- Objects: pares clave-valor sin orden garantizado.
- Sets: colecciones sin elementos duplicados.
- Maps: pares clave-valor con claves de cualquier tipo y orden de inserción.
*/

// Arrays
const numeros = [10, 20, 30];

// Ejemplo 1: recorrer
numeros.forEach(n => console.log(n * 2)); // 20, 40, 60

// Ejemplo 2: transformar
const alCuadrado = numeros.map(n => n ** 2);
console.log(alCuadrado); // [100, 400, 900]

// Objects
const persona = {
  nombre: "Lucía",
  edad: 30
};

// Ejemplo 1: acceso por clave
console.log(persona.nombre); // Lucía

// Ejemplo 2: agregar propiedad
persona.profesion = "Desarrolladora";
console.log(persona);

// Sets
const unicos = new Set([1, 2, 2, 3]);

// Ejemplo 1: tamaño sin duplicados
console.log(unicos.size); // 3

// Ejemplo 2: verificar existencia
console.log(unicos.has(2)); // true

// Maps
const stock = new Map();

// Ejemplo 1: usar objetos como clave
const producto = { id: 1, nombre: "Café" };
stock.set(producto, 50);

// Ejemplo 2: recuperar valor
console.log(stock.get(producto)); // 50

/*
Casos de uso:
- Arrays: listas ordenadas, búsquedas secuenciales, transformación masiva.
- Objects: estructuras flexibles para representar entidades.
- Sets: eliminar duplicados, verificar pertenencia rápida.
- Maps: asociar datos con claves complejas, mantener orden de inserción.
*/
