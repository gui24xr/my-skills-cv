/*
{
  "id": 1205,
  "title": "Function Composition",
  "description": "Técnica que permite encadenar funciones pequeñas en una sola función compleja."
}
*/

// Function Composition: técnica que permite encadenar funciones pequeñas
// para construir una función compleja. La salida de una función es la entrada de la siguiente.
// Favorece la reutilización, el código declarativo y la separación de responsabilidades.

// Funciones simples y puras
function trim(texto) {
  return texto.trim();
}

function toLower(texto) {
  return texto.toLowerCase();
}

function wrapEnParrafos(texto) {
  return `<p>${texto}</p>`;
}

// Composición manual: salida de una entra en la siguiente
const resultadoManual = wrapEnParrafos(toLower(trim("   Hola Mundo   ")));
console.log(resultadoManual); // <p>hola mundo</p>

// Función de composición (right-to-left)
function compose(...funcs) {
  return function (valor) {
    return funcs.reduceRight((acumulado, fn) => fn(acumulado), valor);
  };
}

// Función compuesta
const formatearTexto = compose(wrapEnParrafos, toLower, trim);
console.log(formatearTexto("   JavaScript   ")); // <p>javascript</p>

// Ejemplo 1: procesamiento de entradas de usuario
const limpiarInput = compose(encodeURIComponent, trim);
console.log(limpiarInput("  hola mundo  ")); // hola%20mundo

// Ejemplo 2: análisis de datos
function extraerNumeros(texto) {
  return texto.match(/\d+/g) || [];
}
function convertirANumeros(array) {
  return array.map(Number);
}
const procesarNumeros = compose(convertirANumeros, extraerNumeros);
console.log(procesarNumeros("Edad: 23, Año: 2025")); // [23, 2025]

// Casos comunes de uso:
// - Limpieza y transformación de datos en pasos pequeños y composables.
// - Construcción de pipelines en programación funcional.
// - En frameworks como Redux (middleware), RxJS (operadores), etc.
